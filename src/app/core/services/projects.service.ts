import { Injectable } from '@angular/core';
import { ProjectSlide, ProjectDetail } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  getSlides(): ProjectSlide[] {
    return [
      {
        key: 'washbilling',
        name: 'WashBilling',
        sub: 'Water Utility Billing & Management ERP',
        desc: 'A comprehensive ERP solution for water supply organizations to manage customers, billing, meter readings, accounting, inventory, reports, and communications in one platform. Built with .NET + Angular at Shakta Technology — live in production.',
        tags: ['.NET', 'Angular', 'MS SQL Server', 'REST API'],
        screen: 'washbilling'
      },
      {
        key: 'sbf',
        name: 'SBF — Smart Bus Fare',
        sub: 'Public Transport · University Capstone',
        desc: 'A full-stack digital bus fare platform with QR code passes, Khalti online payment, GPS tracking, and facial emotion feedback. Submitted as BEIT capstone at NCIT (Pokhara University) — Jul 2023.',
        tags: ['Laravel', 'React', 'MySQL', 'QR', 'GPS', 'Khalti'],
        screen: 'sbf'
      },
      {
        key: 'haushala',
        name: 'Haushala',
        sub: 'Community Wellness · Utopia CITYLAB',
        desc: 'A community mental wellness platform prototype built during the Utopia CITYLAB program. Daily mood check-ins, resource directory, and urban health research with 15+ participants across Kathmandu.',
        tags: ['Figma', 'Laravel', 'MySQL', 'User Research'],
        screen: 'haushala'
      },
      {
        key: 'profiles',
        name: 'Digital Profile System',
        sub: 'Customer Management · Enterprise',
        desc: 'Customer data management and profile handling system. Streamlines onboarding and record-keeping for enterprises at scale with role-based access, document management, and comprehensive analytics dashboards.',
        tags: ['.NET', 'MS SQL Server', 'REST API', 'Angular'],
        screen: 'profiles'
      },
      {
        key: 'infosprout',
        name: 'InfoSprout',
        sub: 'Notice Management System · Academic',
        desc: 'Internal notice and information management system for organizations. Enables structured creation, categorization, and distribution of announcements with department-level targeting and employee acknowledgment tracking.',
        tags: ['PHP', 'MySQL', 'Bootstrap', 'AJAX'],
        screen: 'infosprout'
      },
      {
        key: 'skillsprout',
        name: 'SkillSprout',
        sub: 'Event Management System · Academic',
        desc: 'Event and workshop management platform for organizing, registering, and tracking skills development events — with registration analytics, capacity management, waitlisting, and attendance export. 312 registrations across 14 events in testing.',
        tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'AJAX'],
        screen: 'skillsprout'
      }
    ];
  }

  getDetails(): Record<string, ProjectDetail> {
    return {
      washbilling: {
        tag: 'Enterprise Platform · Live · Shakta Technology',
        title: 'WashBilling — Water Utility Management',
        role_items: [
          { label: 'Role', val: 'Software Developer, Shakta Technology' },
          { label: 'Type', val: 'Enterprise Production System' },
          { label: 'Stack', val: 'Angular · .NET Core · MS SQL Server' },
          { label: 'Status', val: 'Live in Production' }
        ],
        overview: 'A comprehensive enterprise-grade water utility management platform built for production use at Shakta Technology. WashBilling handles the full operational lifecycle of a water supply organization — from initial customer registration and meter installation through to monthly billing, payment collection, financial reporting, and regulatory PDF generation. The system serves 41+ active customers across multiple zones and wards in Kuleshwor, Kathmandu, tracking Rs.25,626 in monthly collections.',
        tech: ['C# / .NET Core', 'Angular', 'MS SQL Server', 'TypeScript', 'REST API', 'Entity Framework', 'PDF Generation', 'GIS Mapping', 'NepaliDate Calendar'],
        role: 'Software Developer at Shakta Technology. Responsible for full-stack feature development including backend .NET API design, MS SQL Server schema, Angular frontend modules (dashboard, customer registration, bulk meter reading, billing, reports), and PDF report engine.',
        challenges: 'Designing a billing engine flexible enough to handle variable meter readings, arrears, partial payments, and per-zone tariff structures — while keeping the UI operable by non-technical billing staff. The system also required dual-language support (English and Nepali) with a custom Bikram Sambat calendar implementation, and GIS-linked customer records for spatial zone management.',
        outcomes: [
          'Production platform actively managing 41+ customers with full billing lifecycle',
          'Rs.25,626 monthly collection tracked with real-time dashboard',
          'Bulk meter reading screen processes all customers across zones in a single session',
          '8+ report types generated as branded PDFs with date/zone/ward filters',
          'GIS integration allows drawing service areas and locating meters on interactive maps',
          'Dual English + Nepali UI with Bikram Sambat calendar (BS 2082/83 fiscal year)',
          'Role-based access with admin, operator, and billing staff permission tiers',
          'Inventory, transaction, and accounts modules beyond core billing'
        ]
      },
      sbf: {
        tag: 'Public Transportation · University Capstone · NCIT / Pokhara University',
        title: 'SBF — Smart Bus Fare System',
        role_items: [
          { label: 'Role', val: 'Backend Development · Database · API · Architecture' },
          { label: 'Type', val: 'Academic Capstone (BEIT)' },
          { label: 'Stack', val: 'Laravel · React · MySQL · REST API · QR · GPS' },
          { label: 'Supervisor', val: 'Er. Rishi K. Marseni, NCIT' }
        ],
        overview: 'A full-stack public transportation fare platform submitted as a major capstone project for Bachelor of Engineering in Information Technology at Nepal College of Information Technology (Pokhara University). SBF modernizes the manual, cash-based bus fare system in Nepal through digital subscription passes, QR code verification, online payments via Khalti, GPS-assisted bus tracking, facial emotion-based feedback, and comprehensive management workflows for commuters, bus management committees (BMC), conductors, and administrators.',
        tech: ['Laravel (PHP)', 'React', 'MySQL', 'REST API', 'QR Code Generation & Scanning', 'GPS Integration', 'Khalti Payment Gateway', 'Face-api.js (Emotion Detection)', 'Tailwind CSS', 'Figma'],
        role: 'Backend Development — designed and implemented the Laravel REST API, MySQL database schema, fare and membership logic, QR pass generation and verification engine, Khalti payment integration, and overall system architecture.',
        challenges: 'Designing a membership and fare system flexible enough to handle multiple pass categories (Universal, Sole, Daily/Weekly/Monthly), normal vs. discounted tiers, and automated expiry — while keeping the conductor verification flow fast and reliable in real bus conditions.',
        outcomes: [
          'Digital bus pass system with QR code generation and conductor scanning',
          'Khalti online payment integration for cashless fare collection',
          'Subscription model: 12 pass types across Normal and Discounted categories',
          'GPS-enabled bus tracking for real-time commuter updates',
          'Facial emotion recognition (face-api.js) for automated service feedback',
          'Loyalty points and rewards system for frequent commuters',
          'Role-based portals for Commuter, BMC, Staff, and Admin',
          'Successfully submitted and presented at NCIT (July 2023)'
        ]
      },
      haushala: {
        tag: 'Community Wellness · Utopia CITYLAB Innovation Program',
        title: 'Haushala — Community Mental Wellness Platform',
        role_items: [
          { label: 'Role', val: 'UI/UX Design · Frontend · Strategy' },
          { label: 'Type', val: 'Product Prototype' },
          { label: 'Stack', val: 'Figma · Laravel · MySQL · User Research' },
          { label: 'Context', val: 'Utopia CITYLAB, Kathmandu' }
        ],
        overview: 'A concept platform developed during the Utopia CITYLAB innovation program to encourage daily emotional check-ins and support community wellbeing through accessible digital tools. Haushala ("home" in Nepali) was designed as a safe, culturally appropriate space for urban communities to track mood, access resources, and build healthy habits.',
        tech: ['Figma', 'UI/UX Design', 'User Research', 'Laravel', 'MySQL', 'PHP', 'Bootstrap'],
        role: 'Led UI/UX design, product strategy, and user research. Conducted interviews with 15+ participants in Kathmandu. Built the full-stack prototype including database design and frontend implementation.',
        challenges: 'Designing for a culturally sensitive topic in a local context — ensuring the interface felt approachable and non-clinical while capturing meaningful wellness data. Navigating a tight 3-month timeline from research to functional prototype.',
        outcomes: [
          'Functional prototype delivered within 3-month CITYLAB program timeline',
          'User research conducted with 15+ urban community participants in Kathmandu',
          'Daily emotional check-in flow with mood, sleep, and stress tracking',
          'Resource directory linking to local mental health services and support',
          'Presented as a viable product concept to Utopia CITYLAB stakeholders',
          'Demonstrated feasibility of culturally-sensitive digital wellness tools in Nepal'
        ]
      },
      profiles: {
        tag: 'Enterprise System · Live',
        title: 'Digital Profile System',
        role_items: [
          { label: 'Role', val: 'Web Application Developer' },
          { label: 'Type', val: 'Enterprise Data System' },
          { label: 'Stack', val: '.NET Core · MS SQL Server · REST API' },
          { label: 'Status', val: 'Live in Production' }
        ],
        overview: 'A customer data management and digital profile system built to streamline enterprise onboarding and centralized record-keeping. The system enables structured storage, search, and management of customer profiles across departments.',
        tech: ['C# / .NET Core', 'MS SQL Server', 'REST API', 'Angular', 'Entity Framework'],
        role: 'Web Application Developer. Designed the data model, built the REST API layer, and developed the profile management UI.',
        challenges: 'Building a flexible schema that could accommodate diverse profile types and custom fields — while maintaining query performance at scale.',
        outcomes: [
          'Centralized customer data across departments',
          'Reduced onboarding time with structured profile templates',
          'Search and filter across thousands of records with sub-second response',
          'Audit trail for profile changes with user attribution',
          'Role-based access for department-level isolation'
        ]
      },
      infosprout: {
        tag: 'Information System · Academic Project',
        title: 'InfoSprout',
        role_items: [
          { label: 'Role', val: 'Web Application Developer' },
          { label: 'Type', val: 'Academic Project' },
          { label: 'Stack', val: 'PHP · MySQL · Bootstrap · AJAX' },
          { label: 'Status', val: 'Completed' }
        ],
        overview: 'An internal notice and information management system for organizations. InfoSprout enables structured creation, categorization, and distribution of announcements to employees with role-based visibility controls.',
        tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'AJAX'],
        role: 'Full-stack development including database design, backend CRUD operations, and frontend interface.',
        challenges: 'Designing a simple but flexible categorization system that could serve different types of organizations without becoming overly complex for end users.',
        outcomes: [
          'Notice creation with rich text and file attachments',
          'Department-level targeting for notices',
          'Employee acknowledgment tracking',
          'Search and archive for historical notices',
          'Admin and staff role separation'
        ]
      },
      skillsprout: {
        tag: 'Event Platform · Academic Project',
        title: 'SkillSprout',
        role_items: [
          { label: 'Role', val: 'Web Application Developer' },
          { label: 'Type', val: 'Academic Project' },
          { label: 'Stack', val: 'PHP · MySQL · Bootstrap · AJAX' },
          { label: 'Status', val: 'Completed' }
        ],
        overview: 'An event and workshop management platform for organizing, registering, and tracking skills development events. Built to serve organizations that run regular training workshops and want streamlined registration and reporting.',
        tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'AJAX'],
        role: 'Full-stack development including event management logic, registration system, and reporting dashboard.',
        challenges: 'Building a registration system that could handle concurrent sign-ups without conflicts, and generating useful per-event attendance reports.',
        outcomes: [
          'End-to-end event creation, publishing, and management',
          'Online registration with capacity limits and waitlisting',
          'Attendee dashboard with event history',
          'Registration analytics: 312 registrations across 14 events in testing',
          'Export functionality for attendance records'
        ]
      }
    };
  }
}