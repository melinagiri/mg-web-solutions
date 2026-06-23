import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
import { ConfirmDialog } from '../../shared/confirm-dialog/confirm-dialog';

declare const lucide: any;

/* ─────────────────────────────────────────────────────────────────────────
   FormSubmit — no API keys required. It emails you whenever someone submits
   the form (mail arrives from submissions@formsubmit.co).

   IMPORTANT: use the SAME address (or FormSubmit token) you already received
   mail at, so FormSubmit doesn't make you re-activate.
     • Plain email:  FORMSUBMIT_TARGET = 'you@example.com'
     • Hashed token: FORMSUBMIT_TARGET = 'a1b2c3yourtoken'  (recommended)
   ───────────────────────────────────────────────────────────────────────── */
const FORMSUBMIT_TARGET   = 'hello@melinagiri.com.np'; // ← the email/token you got mail at before
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_TARGET}`;

/* Onboarding form offered after a successful inquiry */
const ONBOARDING_FORM_URL = 'https://forms.gle/FLViRjhekjbE1D7LA';

interface DialogState {
  open: boolean;
  type: 'alert' | 'confirm';
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmDialog],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact implements AfterViewInit {
  name        = '';
  email       = '';
  projectType = '';
  budget      = '';
  message     = '';

  submitLabel  = 'Start a Project →';
  isSubmitting = false;

  /* ── Custom dialog state (replaces native alert/confirm) ── */
  dialog: DialogState = {
    open: false, type: 'confirm', title: '', message: '',
    confirmText: 'OK', cancelText: 'Cancel',
  };
  private dialogResolver: ((value: boolean) => void) | null = null;

  constructor(private scrollAnim: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    lucide.createIcons();
    setTimeout(() => lucide.createIcons(), 100);
    setTimeout(() => lucide.createIcons(), 400);
    setTimeout(() => this.scrollAnim.init(), 50);
  }

  /** Opens the dialog and resolves true (confirm) / false (cancel). */
  private showDialog(opts: Partial<DialogState>): Promise<boolean> {
    this.dialog = {
      ...this.dialog,
      type: 'confirm', title: '', message: '',
      confirmText: 'OK', cancelText: 'Cancel',
      ...opts,
      open: true,
    };
    return new Promise<boolean>(resolve => { this.dialogResolver = resolve; });
  }

  onDialogConfirm(): void {
    this.dialog.open = false;
    this.dialogResolver?.(true);
    this.dialogResolver = null;
  }
  onDialogCancel(): void {
    this.dialog.open = false;
    this.dialogResolver?.(false);
    this.dialogResolver = null;
  }

  async handleSubmit(e: Event): Promise<void> {
    e.preventDefault();

    if (!this.name.trim() || !this.message.trim()) {
      await this.showDialog({
        type: 'alert', title: 'Missing details',
        message: 'Please fill in your name and message before submitting.',
        confirmText: 'Got it',
      });
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    if (!this.email || !emailOk) {
      await this.showDialog({
        type: 'alert', title: 'Check your email',
        message: 'Please enter a valid email address so I can reply to you.',
        confirmText: 'Got it',
      });
      return;
    }

    this.isSubmitting = true;
    this.submitLabel  = 'SENDING…';

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name:    this.name.trim(),
          email:   this.email.trim(),          // becomes the Reply-To
          service: this.projectType || 'Not specified',
          budget:  this.budget || 'Not specified',
          message: this.message.trim(),
          _subject:  'New Project Inquiry — MG Web Solutions',
          _template: 'table',
          _captcha:  'false',
        }),
      });

      const data = await res.json().catch(() => ({} as any));
      const ok = res.ok && data.success !== 'false' && data.success !== false;
      if (!ok) throw new Error(data.message || `FormSubmit error ${res.status}`);

      this.submitLabel = 'MESSAGE SENT ✓';
      this.name = this.email = this.projectType = this.budget = this.message = '';

      // Professional themed popup instead of the browser's confirm().
      const goToForm = await this.showDialog({
        type: 'confirm',
        title: 'Message sent ✓',
        message: 'Would you like to continue to our onboarding form to share '
               + 'more details about your project?',
        confirmText: 'Continue',
        cancelText:  'Not now',
      });
      if (goToForm) {
        const tab = window.open(ONBOARDING_FORM_URL, '_blank');
        if (!tab) window.location.href = ONBOARDING_FORM_URL; // pop-up blocked → same tab
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      this.submitLabel = 'FAILED — TRY AGAIN';
      await this.showDialog({
        type: 'alert', title: 'Something went wrong',
        message: "Your message couldn't be sent just now. Please try again, "
               + 'or email hello@melinagiri.com.np directly.',
        confirmText: 'Close',
      });
    } finally {
      setTimeout(() => {
        this.submitLabel  = 'Start a Project →';
        this.isSubmitting = false;
      }, 4000);
    }
  }
}