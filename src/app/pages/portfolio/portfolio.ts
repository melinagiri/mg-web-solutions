import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  icon: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio implements OnInit {

  projects: Project[] = [
    {
      icon: '💧',
      tag: 'Live Project',
      title: 'WashBilling',
      description: 'Water supply management and billing system for enterprise clients. Handles customer records, billing cycles, and reporting.',
      stack: ['.NET', 'MS SQL Server', 'Angular'],
    },
    {
      icon: '👤',
      tag: 'Live Project',
      title: 'Digital Profile System',
      description: 'Customer data management and profile handling system. Streamlines onboarding and record-keeping for enterprises.',
      stack: ['.NET', 'MS SQL Server', 'REST API'],
    },
    {
      icon: '🧠',
      tag: 'Research',
      title: 'Haushala',
      description: 'Mental health platform prototype designed during the Utopia CITYLAB 100-day innovation program. User-centered design.',
      stack: ['Figma', 'UI/UX', 'Research'],
    },
    {
      icon: '🚌',
      tag: 'Major Project',
      title: 'Smart Bus Fare (SBF)',
      description: 'Automated bus fare system with facial emotion recognition. A smart transit solution integrating biometrics.',
      stack: ['Laravel', 'React', 'Facial AI'],
    },
    {
      icon: '📋',
      tag: 'Minor Project',
      title: 'InfoSprout',
      description: 'Birth registration system simplifying government record-keeping with a clean digital interface.',
      stack: ['PHP', 'MySQL', 'Bootstrap'],
    },
    {
      icon: '🎯',
      tag: 'Minor Project',
      title: 'SkillSprout',
      description: 'Event management platform for organizing, registering, and tracking events and workshops.',
      stack: ['PHP', 'MySQL', 'Bootstrap'],
    },
  ];

  ngOnInit(): void {
    setTimeout(() => this.initObserver(), 100);
  }

  private initObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 100);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }
}