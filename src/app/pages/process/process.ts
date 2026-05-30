import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProcessStep {
  num: string;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.html',
  styleUrls: ['./process.css']
})
export class Process implements OnInit {

  steps: ProcessStep[] = [
    {
      num: '01',
      icon: '💡',
      title: 'Share Your Idea',
      description: 'Tell us your business goals and requirements.',
    },
    {
      num: '02',
      icon: '🔍',
      title: 'Project Discovery',
      description: 'We understand your audience, style and direction.',
    },
    {
      num: '03',
      icon: '📋',
      title: 'Planning & Strategy',
      description: 'We organize features, structure and design approach.',
    },
    {
      num: '04',
      icon: '🛠️',
      title: 'Design & Build',
      description: 'We build a modern digital experience focused on performance.',
    },
    {
      num: '05',
      icon: '🚀',
      title: 'Launch & Support',
      description: 'Your project goes live with ongoing support and improvements.',
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
            setTimeout(() => entry.target.classList.add('visible'), i * 120);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }
}