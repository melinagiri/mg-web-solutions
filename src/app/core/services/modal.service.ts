import { Injectable, signal } from '@angular/core';
import { ProjectDetail } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ModalService {
  activeProject = signal<ProjectDetail | null>(null);

  open(project: ProjectDetail): void {
    this.activeProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.activeProject.set(null);
    document.body.style.overflow = '';
  }
}