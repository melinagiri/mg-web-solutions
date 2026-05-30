import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  services = [
    { icon: '🌐', title: 'Modern Websites',    desc: 'Clean, fast, mobile-first websites that establish credibility and convert visitors into clients.' },
    { icon: '⚙️', title: 'Web Applications',   desc: 'Robust, scalable apps built with .NET Core and Angular — designed for real business workflows.' },
    { icon: '🎨', title: 'UI/UX Design',        desc: 'Figma-based interfaces that prioritize user experience, visual clarity, and brand consistency.' },
  ];

  stats = [
    { num: '2+',        label: 'Years Experience' },
    { num: 'NPR 15k',   label: 'Starting Price' },
    { num: '5-Step',    label: 'Proven Process' },
    { num: '100%',      label: 'Client Focused' },
  ];

  trusts = [
    'Clear onboarding process',
    'Strategy before design',
    'Mobile-first & SEO-ready',
    'Ongoing support included',
    '.NET + Angular expertise',
  ];

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 90);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => this.observer.observe(el));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}