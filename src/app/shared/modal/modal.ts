import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../core/services/modal.service';
import { ProjectDetail } from '../../core/models/project.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class Modal {
  constructor(public modalService: ModalService) {}

  get project(): ProjectDetail | null {
    return this.modalService.activeProject();
  }

  get isOpen(): boolean {
    return this.project !== null;
  }

  close(): void {
    this.modalService.close();
  }

  closeOnOverlay(e: MouseEvent): void {
    if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.isOpen) this.close();
  }
}