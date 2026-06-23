import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { TiltDirective } from '../../core/directives/tilt.directive';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
import { WhyItem } from '../../core/models/project.model';

interface ExperienceItem { role: string; org: string; period: string; points: string[]; }
interface EducationItem { degree: string; school: string; period: string; note?: string; }
interface SkillGroup { label: string; items: string[]; }

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, TiltDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements OnInit, AfterViewInit {
  /** true only on the standalone /about route — shows the expanded detail */
  isPage = false;

  readonly whyItems: WhyItem[] = [
    { title: 'Strategy First Approach',      desc: 'Goals before pixels. We plan before we build.' },
    { title: 'Direct Communication',          desc: 'Work directly with the engineer, not an account manager.' },
    { title: 'Enterprise Level Quality',      desc: 'Production-grade code from real enterprise experience.' },
    { title: 'On-time Delivery',              desc: 'Structured process means no missed deadlines.' },
    { title: 'Ongoing Support & Maintenance', desc: 'We stay with you long after launch day.' }
  ];

  readonly bio =
    `I'm a licensed IT Engineer based in Kathmandu with hands-on experience building ` +
    `enterprise web applications using .NET, Angular, SQL Server and REST APIs. I've ` +
    `contributed to municipal-scale water billing, customer management and digital ` +
    `profile systems deployed across multiple local-government wards — covering backend ` +
    `development, database design, authentication, reporting and GIS integration. ` +
    `Alongside engineering, I've led teams, run user research and helped shape early-stage ` +
    `products, and I care most about technology that creates measurable, real-world impact.`;

  readonly experience: ExperienceItem[] = [
    {
      role: 'Software Developer (.NET & Angular)',
      org: 'Shakta Technology Pvt. Ltd. — Kathmandu',
      period: 'Feb 2025 – Present',
      points: [
        'Built and maintained enterprise water-billing and customer-management systems deployed across multiple municipal wards.',
        'Developed REST APIs, JWT authentication, role-based access, billing modules and reporting systems.',
        'Independently built 30+ operational reports plus PDF/Excel exports for datasets of thousands of records.',
        'Integrated GIS customer mapping with Leaflet & OpenStreetMap and built SMS notification workflows.',
        'Designed and optimised SQL Server stored procedures, views, functions and triggers.'
      ]
    },
    {
      role: 'Data Specialist & Team Leader',
      org: 'CloudFactory — Lalitpur',
      period: 'Jan 2021 – Dec 2024',
      points: [
        'Led teams of up to 10 members across multi-phase data-operations projects.',
        'Ran mentoring, knowledge-sharing and performance-improvement initiatives.',
        'Managed execution while holding quality standards and delivery timelines.'
      ]
    },
    {
      role: 'Urban Health Tech Venture Builder',
      org: 'Utopia / CITYLAB Kathmandu',
      period: 'Apr – Jun 2024',
      points: [
        'Completed a 100-day innovation and venture-building program on urban health.',
        'Ran user research, problem validation and solution design.',
        'Developed and validated a digital mental-health platform concept for Nepal.'
      ]
    },
    {
      role: 'Technical Support Executive',
      org: 'Kalash Services (WorldLink Internet)',
      period: 'Feb – Apr 2022',
      points: [
        'Provided first-level support for connectivity and networking issues.',
        'Diagnosed router and configuration problems through structured troubleshooting.'
      ]
    }
  ];

  readonly education: EducationItem[] = [
    {
      degree: 'Master of Information Technology (MIT)',
      school: 'Central Dept. of CSIT, Tribhuvan University',
      period: '2025 – Present'
    },
    {
      degree: 'B.E. in Information Technology',
      school: 'NCIT, Pokhara University',
      period: '2018 – 2024',
      note: 'GPA 3.18 · PU Scholarship Recipient'
    },
    {
      degree: '+2 Science',
      school: 'United Academy',
      period: '2016 – 2018',
      note: 'GPA 3.18 · HSEB Scholarship Recipient'
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    { label: 'Backend',  items: ['C#', 'ASP.NET', '.NET Core', 'REST APIs', 'Laravel'] },
    { label: 'Frontend', items: ['Angular', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
    { label: 'Database', items: ['SQL Server', 'MySQL', 'Stored Procedures', 'Views', 'Triggers'] },
    { label: 'Security', items: ['JWT Auth', 'Role-Based Access'] },
    { label: 'GIS & Tools', items: ['OpenStreetMap', 'Leaflet', 'Git', 'Figma', 'Postman'] }
  ];

  readonly highlights: string[] = [
    'Licensed IT Engineer building production enterprise systems.',
    'Delivered 30+ operational reports for municipal-scale platforms.',
    'Led teams of up to 10 for roughly 2.5 years at CloudFactory.',
    'Contributed to software supporting local-government and citizen services.',
    'Selected for the Utopia Urban Health Venture-Building program.'
  ];

  constructor(
    private scrollAnim: ScrollAnimationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isPage = this.router.url.split('#')[0] === '/about';
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollAnim.init(), 50);
  }
}