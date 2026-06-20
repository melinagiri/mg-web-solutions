import { Injectable } from '@angular/core';
import { ProjectSlide, ProjectDetail } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  getSlides(): ProjectSlide[] {
    return [
      {
        key: 'watermark',
        name: 'Watermark ERP',
        sub: 'Municipal Water Utility Platform',
        desc: 'Enterprise platform for municipal water utilities covering customer registration, billing, meter reading, GIS mapping, SMS notifications, reporting, accounting, and operational management.',
        tags: ['.NET', 'Angular', 'SQL Server', 'GIS'],
        screen: 'washbilling'
      },
      {
        key: 'profiles',
        name: 'Digital Profile System',
        sub: 'Enterprise Customer Management',
        desc: 'Customer profile and operational data management platform with role-based access, mapping, inventory tracking, reporting, and centralized record management.',
        tags: ['.NET', 'Angular', 'SQL Server', 'REST API'],
        screen: 'profiles'
      },
      {
        key: 'haushala',
        name: 'Haushala',
        sub: 'Mental Health Innovation Platform',
        desc: 'Research-driven mental health venture developed through the Utopia CITYLAB program, backed by extensive user, expert, and stakeholder research.',
        tags: ['Figma', 'Research', 'UX', 'Innovation'],
        screen: 'haushala'
      },
      {
        key: 'sbf',
        name: 'Smart Bus Fare',
        sub: 'Digital Transportation Platform',
        desc: 'Full-stack fare management platform featuring online payments, membership management, GPS tracking, QR verification, and emotion-based passenger feedback.',
        tags: ['Laravel', 'React', 'MySQL', 'GPS'],
        screen: 'sbf'
      },
      {
        key: 'movierec',
        name: 'Movie Recommendation System',
        sub: 'Machine Learning Research Project',
        desc: 'Python-based recommendation engine implementing collaborative filtering, content-based filtering, and Naive Bayes approaches using the MovieLens dataset.',
        tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-Learn'],
        screen: 'movie-recommendation'
      },
      {
        key: 'skillsprout',
        name: 'SkillSprout',
        sub: 'Social Networking Platform',
        desc: 'Facebook-inspired social networking and community engagement platform with profiles, posts, comments, media sharing, and user interaction features.',
        tags: ['PHP', 'MySQL', 'Bootstrap', 'AJAX'],
        screen: 'skillsprout'
      },
      {
        key: 'infosprout',
        name: 'InfoSprout',
        sub: 'Birth Registration System',
        desc: 'Digital birth registration and certificate management platform designed for local government offices and citizen services.',
        tags: ['PHP', 'MySQL', 'Bootstrap', 'FPDF'],
        screen: 'infosprout'
      }
    ];
  }

  getDetails(): Record<string, ProjectDetail> {
    return {
      watermark: {
        tag: 'Enterprise Platform · Production System',
        title: 'Watermark ERP (Formerly WashBilling)',
        role_items: [
          { label: 'Role', val: 'Full-Stack Software Developer' },
          { label: 'Type', val: 'Municipal ERP Platform' },
          { label: 'Stack', val: '.NET · Angular · SQL Server' },
          { label: 'Status', val: 'Production Deployment' }
        ],
        overview: 'Municipal-scale water utility management platform developed at Shakta Technology to digitize customer registration, meter management, billing, payment tracking, reporting, GIS mapping, SMS communication, and administrative workflows.',
        tech: ['C#', '.NET', 'Angular', 'SQL Server', 'JWT', 'REST API', 'Leaflet', 'OpenStreetMap'],
        role: 'Developed APIs, authentication, billing, customer registration, meter reading, reporting, SMS integration, GIS mapping, and database functionality. Independently developed 30+ operational reports and large-scale export modules.',
        challenges: 'Implementing GIS-based customer mapping, generating large PDF/Excel exports from thousands of records, and building flexible billing workflows for municipal operations.',
        outcomes: [
          'Developed 30+ operational reports',
          'Implemented PDF and Excel exports for large datasets',
          'Integrated GIS mapping using Leaflet and OpenStreetMap',
          'Built JWT authentication and role-based access control',
          'Integrated SMS notification workflows',
          'Supported municipal operations across multiple wards',
          'Designed procedures, views, functions, and triggers',
          'Contributed across the complete SDLC'
        ]
      },

      profiles: {
        tag: 'Enterprise System · Production',
        title: 'Digital Profile System',
        role_items: [
          { label: 'Role', val: 'Software Developer' },
          { label: 'Type', val: 'Customer Management Platform' },
          { label: 'Stack', val: '.NET · Angular · SQL Server' },
          { label: 'Status', val: 'Live System' }
        ],
        overview: 'Enterprise customer profile and operational data management platform designed to centralize customer records, mapping information, inventory tracking, and administrative workflows.',
        tech: ['C#', '.NET', 'Angular', 'SQL Server', 'REST API'],
        role: 'Worked across backend APIs, frontend modules, reporting, authentication, mapping features, and database development.',
        challenges: 'Managing large customer datasets while maintaining performance, security, and operational usability.',
        outcomes: [
          'Centralized customer records',
          'Map-based profile visualization',
          'Role-based access control',
          'Integrated reporting workflows',
          'Inventory and operational management support'
        ]
      },

      haushala: {
        tag: 'Health Innovation · Utopia CITYLAB',
        title: 'Haushala – Mental Health Platform',
        role_items: [
          { label: 'Role', val: 'Co-Founder · Product Lead' },
          { label: 'Type', val: 'Startup Venture' },
          { label: 'Stack', val: 'Figma · Research · Business Design' },
          { label: 'Program', val: 'Utopia CITYLAB' }
        ],
        overview: 'Digital mental health platform concept developed through extensive research to improve accessibility, affordability, and awareness of mental health services in Nepal.',
        tech: ['Figma', 'User Research', 'Journey Mapping', 'Business Modeling'],
        role: 'Led research, product design, validation, stakeholder mapping, customer journey design, and business strategy.',
        challenges: 'Validating mental health challenges across different user groups and designing culturally relevant solutions.',
        outcomes: [
          '100+ user interviews conducted',
          '25+ expert interviews completed',
          '100+ stakeholder interactions',
          '50+ prototype validation sessions',
          'Customer journey maps developed',
          'Value proposition design completed',
          'Business model and partnership strategy created'
        ]
      },

      sbf: {
        tag: 'Transportation Technology · Capstone Project',
        title: 'Smart Bus Fare System',
        role_items: [
          { label: 'Role', val: 'Backend Developer & Tester' },
          { label: 'Type', val: 'University Capstone' },
          { label: 'Stack', val: 'Laravel · React · MySQL' },
          { label: 'Team', val: '4 Members' }
        ],
        overview: 'Digital transportation platform designed to modernize fare collection and passenger management through online payments, subscriptions, GPS tracking, and automated feedback systems.',
        tech: ['Laravel', 'React', 'MySQL', 'GPS', 'QR Code', 'Khalti'],
        role: 'Developed backend services, database architecture, fare logic, and testing workflows.',
        challenges: 'Combining payments, subscriptions, GPS tracking, and user management into a unified platform.',
        outcomes: [
          'Online payment integration',
          'Membership and pass management',
          'GPS-based bus tracking',
          'QR verification workflows',
          'Facial emotion recognition implementation',
          'Comprehensive testing and validation'
        ]
      },

      movierec: {
        tag: 'Machine Learning · MIT Research Project',
        title: 'Movie Recommendation System',
        role_items: [
          { label: 'Role', val: 'Developer & Researcher' },
          { label: 'Type', val: 'Machine Learning Project' },
          { label: 'Stack', val: 'Python · Pandas · Scikit-Learn' },
          { label: 'Dataset', val: 'MovieLens' }
        ],
        overview: 'Python-based movie recommendation engine implementing and comparing collaborative filtering, content-based filtering, and Naive Bayes recommendation approaches.',
        tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Tkinter', 'Matplotlib'],
        role: 'Implemented recommendation algorithms, GUI application, evaluation workflows, and dataset processing.',
        challenges: 'Building multiple recommendation approaches and evaluating their effectiveness using benchmark datasets.',
        outcomes: [
          'MovieLens dataset integration',
          'Collaborative filtering implementation',
          'Content-based recommendation module',
          'Naive Bayes recommendation model',
          'Tkinter desktop application',
          'RMSE-based evaluation and comparison'
        ]
      },

      skillsprout: {
        tag: 'Social Platform · Community Engagement',
        title: 'SkillSprout',
        role_items: [
          { label: 'Role', val: 'Full-Stack Developer' },
          { label: 'Type', val: 'Social Networking Platform' },
          { label: 'Stack', val: 'PHP · MySQL · Bootstrap' },
          { label: 'Status', val: 'Completed Project' }
        ],
        overview: 'Social networking platform inspired by Facebook, focused on community engagement, content sharing, user profiles, event discovery, and interaction.',
        tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'AJAX'],
        role: 'Developed user management, posting, commenting, media uploads, and profile management workflows.',
        challenges: 'Building interactive social features with AJAX-driven user experiences and media handling.',
        outcomes: [
          'User registration and onboarding',
          'Profile and cover photo management',
          'Post creation and media uploads',
          'Likes and comments system',
          'Real-time AJAX interactions',
          'Privacy and visibility controls'
        ]
      },

      infosprout: {
        tag: 'Government Technology · Civil Registration',
        title: 'InfoSprout',
        role_items: [
          { label: 'Role', val: 'Full-Stack Developer' },
          { label: 'Type', val: 'Birth Registration System' },
          { label: 'Stack', val: 'PHP · MySQL · Bootstrap · FPDF' },
          { label: 'Status', val: 'Completed Project' }
        ],
        overview: 'Digital birth registration and certificate management system designed to streamline registration workflows for citizens and local government offices.',
        tech: ['PHP', 'MySQL', 'Bootstrap', 'FPDF', 'OTP Verification'],
        role: 'Developed registration workflows, document management, certificate generation, authentication, and administration modules.',
        challenges: 'Designing secure digital registration and certificate generation workflows with administrative approval processes.',
        outcomes: [
          'Digital birth registration workflow',
          'Certificate generation system',
          'OTP-based verification',
          'Role-based administration',
          'Document upload workflows',
          'Citizen application tracking'
        ]
      }
    };
  }
}
