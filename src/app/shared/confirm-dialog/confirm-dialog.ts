import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-dialog.html',
  styleUrls: ['./confirm-dialog.css'],
})
export class ConfirmDialog {
  /** Show / hide the dialog */
  @Input() open = false;
  /** 'confirm' shows OK + Cancel; 'alert' shows a single OK button */
  @Input() type: 'alert' | 'confirm' = 'confirm';
  @Input() title = '';
  @Input() message = '';
  @Input() confirmText = 'OK';
  @Input() cancelText  = 'Cancel';

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel  = new EventEmitter<void>();

  onConfirm(): void { this.confirm.emit(); }
  onCancel(): void  { this.cancel.emit(); }

  /** Click on the dark backdrop (not the box) closes as cancel */
  onBackdrop(e: MouseEvent): void {
    if (e.target === e.currentTarget) this.onCancel();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void { if (this.open) this.onCancel(); }
}