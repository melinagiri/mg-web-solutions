import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  skills = [
    { label: 'C# / .NET Core', blue: true },
    { label: 'Angular 17+', blue: true },
    { label: 'TypeScript', blue: true },
    { label: 'MS SQL Server', blue: true },
    { label: 'REST APIs', blue: true },
    { label: 'Laravel', blue: false },
    { label: 'Figma / UI/UX', blue: false },
    { label: 'WordPress', blue: false },
    { label: 'SEO Setup', blue: false },
    { label: 'Git / GitLab', blue: false },
  ];

  experience = [
    {
      role: 'Software Developer',
      company: 'Shakta Technology Pvt. Ltd.',
      period: 'Feb 2025 – Present',
      desc: 'Enterprise-level .NET & Angular web applications. REST APIs, backend business logic, MS SQL Server optimization.'
    },
    {
      role: 'Data Specialist & Team Lead',
      company: 'CloudFactory, Lalitpur',
      period: 'Jan 2021 – Dec 2024',
      desc: 'Led multi-phase data projects for clients including Buildots, Racer Tracker, and Receipt Plus.'
    },
    {
      role: 'Urban Health Tech Entrepreneur',
      company: 'Utopia, CITYLAB Kathmandu',
      period: 'April – June 2024',
      desc: '100-day innovation program. Figma prototype for mental health platform, user-centered design.'
    },
    {
      role: 'Technical Support Executive',
      company: 'Kalash Services / WorldLink',
      period: 'Feb – Apr 2022',
      desc: 'First-level technical support for internet connectivity, network issues, and client communication.'
    },
  ];

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => this.observer.observe(el));
  }

  ngOnDestroy() { this.observer?.disconnect(); }
}