import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import { ModalService } from '../../core/services/modal.service';
import { ProjectSlide } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects implements OnInit {
  slides: ProjectSlide[] = [];
  currentIdx = 0;
  isFading = false;
  lightboxOpen = false;
  isPage = false;

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
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.slides = this.projectsService.getSlides();
    this.isPage = this.router.url === '/projects';
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

  openLightbox(): void {
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.lightboxOpen) this.closeLightbox();
  }

  openModal(key: string): void {
    const details = this.projectsService.getDetails();
    if (details[key]) this.modalService.open(details[key]);
  }
}