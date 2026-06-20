import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../core/services/projects.service';
import { ModalService } from '../../core/services/modal.service';
import { ProjectSlide } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects implements OnInit {
  slides: ProjectSlide[] = [];
  currentIdx = 0;
  isFading = false;

  // Aliases used by projects.html template
  get screenFading(): boolean { return this.isFading; }
  get detailFading(): boolean { return this.isFading; }

  readonly thumbClasses: Record<string, string> = {
    washbilling: 'ps-thumb-wb',
    sbf:         'ps-thumb-sbf',
    haushala:    'ps-thumb-haushala',
    profiles:    'ps-thumb-profiles',
    infosprout:  'ps-thumb-info',
    skillsprout: 'ps-thumb-skill'
  };

  constructor(
    private projectsService: ProjectsService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.slides = this.projectsService.getSlides();
  }

  get current(): ProjectSlide {
    return this.slides[this.currentIdx];
  }

  selectProject(idx: number): void {
    if (idx === this.currentIdx) return;
    this.currentIdx = idx;
  }

  sliderNav(dir: number): void {
    const next = (this.currentIdx + dir + this.slides.length) % this.slides.length;
    this.selectProject(next);
  }

  openModal(key: string): void {
    const details = this.projectsService.getDetails();
    if (details[key]) this.modalService.open(details[key]);
  }
}