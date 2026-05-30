import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services implements OnInit {

  services: Service[] = [
    {
      icon: '🌐',
      title: 'Modern Websites',
      description: 'Clean, fast, mobile-first websites that establish credibility and convert visitors into clients.',
      features: [
        'Custom design — no templates',
        'SEO & performance optimized',
        'Mobile responsive',
        'Contact / inquiry forms',
        'Google Analytics setup',
      ],
    },
    {
      icon: '⚙️',
      title: 'Web Applications',
      description: 'Robust, scalable web apps built with .NET Core and Angular — designed for real business workflows.',
      features: [
        'Booking & management systems',
        'Custom dashboards',
        'REST API development',
        'Database design & optimization',
        'Authentication & security',
      ],
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Figma-based interfaces that prioritize user experience, visual clarity, and brand consistency.',
      features: [
        'Wireframes & prototypes',
        'Brand visual identity',
        'User flow optimization',
        'Design system creation',
        'Handoff-ready specs',
      ],
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