// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// export interface ContactLink {
//   icon: string;
//   label: string;
//   sublabel: string;
//   href: string;
// }

// @Component({
//   selector: 'app-contact',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './contact.html',
//   styleUrls: ['./contact.css']
// })
// export class Contact implements OnInit {

//   contactForm!: FormGroup;

//   contactLinks: ContactLink[] = [
//     {
//       icon: '✉️',
//       label: 'contact@melinagiri.com.np',
//       sublabel: 'Email us — we reply within 24 hours',
//       href: 'mailto:contact@melinagiri.com.np',
//     },
//     {
//       icon: '📋',
//       label: 'Project Inquiry Form',
//       sublabel: 'Fill in your project details — takes 3 minutes',
//       href: 'https://forms.gle/FLViRjhekjbE1D7LA',
//     },
//     {
//       icon: '💼',
//       label: 'LinkedIn',
//       sublabel: 'Connect with Melina Giri',
//       href: 'https://www.linkedin.com/in/melinagiri/',
//     },
//     {
//       icon: '💻',
//       label: 'GitHub — melinagiri',
//       sublabel: 'View code and open-source work',
//       href: 'https://github.com/melinagiri',
//     },
//   ];

//   serviceOptions = [
//     { value: 'starter', label: 'Modern Website (Starter — NPR 15k–25k)' },
//     { value: 'professional', label: 'Business Website (Professional — NPR 25k–50k)' },
//     { value: 'advanced', label: 'Web Application (Advanced — NPR 50k+)' },
//     { value: 'uiux', label: 'UI/UX Design' },
//     { value: 'discuss', label: "Not sure — let's discuss" },
//   ];

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.contactForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       service: [''],
//       message: [''],
//     });

//     setTimeout(() => this.initObserver(), 100);
//   }

//   onSubmit(): void {
//     if (this.contactForm.valid) {
//       window.open('https://forms.gle/FLViRjhekjbE1D7LA', '_blank');
//     }
//   }

//   isExternalLink(href: string): boolean {
//     return href.startsWith('http');
//   }

//   private initObserver(): void {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry, i) => {
//           if (entry.isIntersecting) {
//             setTimeout(() => entry.target.classList.add('visible'), i * 100);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
//     document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
//   }
// }
// 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  name    = '';
  email   = '';
  service = '';
  message = '';

  submitLabel  = 'Send Message →';
  isSubmitting = false;

  constructor(private contactService: ContactService) {}

  async handleSubmit(e: Event): Promise<void> {
    e.preventDefault();
    if (!this.name.trim() || !this.message.trim()) {
      alert('Please fill in your name and message.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    if (!this.email || !emailOk) {
      alert('Please enter a valid email address.');
      return;
    }

    this.isSubmitting = true;
    this.submitLabel  = 'SENDING…';

    try {
      await this.contactService.send({
        name:    this.name.trim(),
        email:   this.email.trim(),
        service: this.service || 'Not specified',
        message: this.message.trim()
      });
      this.submitLabel = 'MESSAGE SENT ✓';
      this.name = this.email = this.service = this.message = '';
      setTimeout(() => { this.submitLabel = 'Send Message →'; this.isSubmitting = false; }, 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      this.submitLabel = 'FAILED — TRY AGAIN';
      setTimeout(() => { this.submitLabel = 'Send Message →'; this.isSubmitting = false; }, 3000);
    }
  }
}