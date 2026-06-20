import { Component, AfterViewInit, OnInit, HostListener } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
declare const lucide: any;

export interface ServiceDetail {
  icon: string;
  title: string;
  tagline: string;
  desc: string;
  includes: string[];
  goodFor: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services implements OnInit, AfterViewInit {
  isPage = false;
  activeDetail: number | null = null;

  readonly serviceDetails: ServiceDetail[] = [
    {
      icon: 'building-2',
      title: 'Enterprise Systems',
      tagline: 'Custom ERP, CRM & business operations platforms',
      desc: 'I build full-featured enterprise systems that replace manual processes, spreadsheets, and disconnected tools with a single unified platform tailored to how your business actually works.',
      includes: [
        'Customer & account management',
        'Billing, invoicing and payment tracking',
        'Inventory and stock management',
        'Role-based access for different staff levels',
        'Reports, exports and analytics dashboards',
        'Custom workflows for your specific process',
      ],
      goodFor: 'Businesses with complex internal operations — utilities, suppliers, distributors, service companies — who need a system built for their exact workflow rather than an off-the-shelf solution.'
    },
    {
      icon: 'globe',
      title: 'Business Websites',
      tagline: 'Professional websites that convert visitors into clients',
      desc: 'A business website is your most visible asset. I build fast, modern sites that clearly communicate what you do, build trust with visitors, and guide them toward contacting you.',
      includes: [
        'Responsive design for all screen sizes',
        'Clear service/product presentation',
        'Contact forms and call-to-action sections',
        'SEO-ready structure and performance optimization',
        'Portfolio, testimonials and about sections',
        'CMS integration for self-managed content',
      ],
      goodFor: 'Freelancers, small businesses, agencies, clinics, consultants — anyone who needs a credible online presence that works as hard as they do.'
    },
    {
      icon: 'code-2',
      title: 'Web Applications',
      tagline: 'Feature-rich apps built for real workflows',
      desc: 'Web applications go beyond websites — they let users do things: register, submit, track, manage, collaborate. I build scalable apps with clean interfaces that make complex tasks feel simple.',
      includes: [
        'User authentication and role management',
        'Dynamic data forms and workflows',
        'Database design and API development',
        'Real-time updates and notifications',
        'Admin panels and reporting tools',
        'Third-party integrations (payment, maps, SMS)',
      ],
      goodFor: 'Organizations that need a custom tool — registration systems, booking platforms, internal portals, tracking tools — rather than a generic SaaS that almost fits.'
    },
    {
      icon: 'smartphone',
      title: 'Mobile-First Design',
      tagline: 'Built to feel native on every device',
      desc: 'Over 60% of web traffic is mobile. I design and build interfaces that are optimized for touch, fast on slow connections, and feel as good on a phone as on a desktop.',
      includes: [
        'Touch-optimized layouts and interactions',
        'Performance optimization for mobile networks',
        'Progressive Web App (PWA) capabilities',
        'Adaptive design across breakpoints',
        'Mobile-first CSS architecture',
        'Testing across real devices',
      ],
      goodFor: 'Any project where users are likely on mobile — marketplaces, field tools, public-facing services, booking systems.'
    },
    {
      icon: 'database',
      title: 'API & Backend Development',
      tagline: 'The engine that powers your frontend',
      desc: 'A clean, well-structured backend is the difference between a system that scales and one that breaks under pressure. I design APIs and databases that are secure, fast, and maintainable.',
      includes: [
        'RESTful API design and development',
        'Database schema design (SQL / relational)',
        '.NET Core, Laravel or Node.js backends',
        'Authentication (JWT, session, OAuth)',
        'Data validation, error handling, logging',
        'API documentation and testing',
      ],
      goodFor: 'Frontend teams that need a backend built, or businesses that need their existing systems to connect and share data reliably.'
    },
    {
      icon: 'layout-dashboard',
      title: 'Dashboard & Analytics',
      tagline: 'See your data clearly, make better decisions',
      desc: 'Raw data is meaningless without context. I build dashboards that surface the right numbers at the right time — giving you and your team a clear view of performance without digging through spreadsheets.',
      includes: [
        'KPI cards and summary metrics',
        'Charts, graphs and trend visualizations',
        'Filterable tables and data exports',
        'Date range selection and comparisons',
        'Role-based data visibility',
        'Real-time or scheduled data refresh',
      ],
      goodFor: 'Business owners, managers and ops teams who need to track performance, spot problems early, and report to stakeholders without manual effort.'
    },
    {
      icon: 'shield-check',
      title: 'Maintenance & Support',
      tagline: 'Keep your system running at its best',
      desc: 'Launching a system is not the end — it\'s the beginning. I offer ongoing support to fix bugs, update dependencies, add features, and make sure your system stays fast and secure over time.',
      includes: [
        'Bug fixes and issue resolution',
        'Security patches and updates',
        'Performance monitoring and optimization',
        'Feature additions and improvements',
        'Database maintenance and backups',
        'Priority response for critical issues',
      ],
      goodFor: 'Businesses with existing systems that need a reliable technical partner — not just a one-time developer who disappears after launch.'
    },
    {
      icon: 'pen-tool',
      title: 'UI/UX Design',
      tagline: 'Interfaces people actually want to use',
      desc: 'Good design is not decoration — it\'s clarity. I design interfaces that are intuitive from the first click, reduce friction, and make your product feel professional and trustworthy.',
      includes: [
        'Wireframes and user flow mapping',
        'High-fidelity Figma prototypes',
        'Component and design system creation',
        'User experience review of existing products',
        'Responsive layout design',
        'Handoff-ready files for development',
      ],
      goodFor: 'Teams that want to design before they build, founders validating an idea, or businesses whose existing product feels hard to use.'
    },
    {
      icon: 'git-branch',
      title: 'Technical Consultation',
      tagline: 'Clear technical direction without the confusion',
      desc: 'Not every problem requires code right away. Sometimes you need someone to look at what you\'re building, ask the right questions, and help you make smarter decisions before investing time and money.',
      includes: [
        'Tech stack selection and advice',
        'Architecture review and planning',
        'Code review and quality assessment',
        'Roadmap and feature prioritization',
        'Build vs buy vs integrate analysis',
        'One-off advisory sessions or ongoing retainer',
      ],
      goodFor: 'Founders, non-technical business owners, or teams stuck on a decision — who need an experienced developer to think through the problem with them, not just execute a task.'
    },
  ];

  constructor(
    private scrollAnim: ScrollAnimationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isPage = this.router.url === '/services';
  }

  ngAfterViewInit(): void {
    // Run lucide immediately and after each Angular render cycle
    lucide.createIcons();
    setTimeout(() => lucide.createIcons(), 0);
    setTimeout(() => lucide.createIcons(), 100);
    setTimeout(() => lucide.createIcons(), 400);
    setTimeout(() => this.scrollAnim.init(), 50);
  }

  openDetail(idx: number): void {
    this.activeDetail = idx;
    document.body.style.overflow = 'hidden';
    setTimeout(() => lucide.createIcons(), 0);
    setTimeout(() => lucide.createIcons(), 100);
  }

  closeDetail(): void {
    this.activeDetail = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.activeDetail !== null) this.closeDetail();
  }
}