// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// export interface Project {
//   icon: string;
//   tag: string;
//   title: string;
//   description: string;
//   stack: string[];
// }

// @Component({
//   selector: 'app-portfolio',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './portfolio.html',
//   styleUrls: ['./portfolio.css']
// })
// export class Portfolio implements OnInit {

//   projects: Project[] = [
//     {
//       icon: '💧',
//       tag: 'Live Project',
//       title: 'WashBilling',
//       description: 'Water supply management and billing system for enterprise clients. Handles customer records, billing cycles, and reporting.',
//       stack: ['.NET', 'MS SQL Server', 'Angular'],
//     },
//     {
//       icon: '👤',
//       tag: 'Live Project',
//       title: 'Digital Profile System',
//       description: 'Customer data management and profile handling system. Streamlines onboarding and record-keeping for enterprises.',
//       stack: ['.NET', 'MS SQL Server', 'REST API'],
//     },
//     {
//       icon: '🧠',
//       tag: 'Research',
//       title: 'Haushala',
//       description: 'Mental health platform prototype designed during the Utopia CITYLAB 100-day innovation program. User-centered design.',
//       stack: ['Figma', 'UI/UX', 'Research'],
//     },
//     {
//       icon: '🚌',
//       tag: 'Major Project',
//       title: 'Smart Bus Fare (SBF)',
//       description: 'Automated bus fare system with facial emotion recognition. A smart transit solution integrating biometrics.',
//       stack: ['Laravel', 'React', 'Facial AI'],
//     },
//     {
//       icon: '📋',
//       tag: 'Minor Project',
//       title: 'InfoSprout',
//       description: 'Birth registration system simplifying government record-keeping with a clean digital interface.',
//       stack: ['PHP', 'MySQL', 'Bootstrap'],
//     },
//     {
//       icon: '🎯',
//       tag: 'Minor Project',
//       title: 'SkillSprout',
//       description: 'Event management platform for organizing, registering, and tracking events and workshops.',
//       stack: ['PHP', 'MySQL', 'Bootstrap'],
//     },
//   ];

//   ngOnInit(): void {
//     setTimeout(() => this.initObserver(), 100);
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
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../core/services/projects.service';
import { ModalService } from '../../core/services/modal.service';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
import { ProjectSlide } from '../../core/models/project.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio implements OnInit, AfterViewInit {
  slides: ProjectSlide[] = [];
  currentIdx = 0;
  isFading   = false;

  // Aliases used by the shared template
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
    private scrollAnim: ScrollAnimationService
  ) {}

  ngOnInit(): void {
    this.slides = this.projectsService.getSlides();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollAnim.init(), 50);
  }

  get current(): ProjectSlide {
    return this.slides[this.currentIdx];
  }

  selectProject(idx: number): void {
    if (idx === this.currentIdx || this.isFading) return;
    this.isFading = true;
    setTimeout(() => {
      this.currentIdx = idx;
      this.isFading   = false;
    }, 200);
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