import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PricingPlan {
  tier: string;
  amount: string;
  amountAccent: string;
  bestFor: string;
  features: string[];
  ctaLabel: string;
  ctaLink: string;
  ctaStyle: 'outline' | 'solid';
  featured: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class Pricing implements OnInit {

  plans: PricingPlan[] = [
    {
      tier: 'Starter',
      amount: 'NPR 15k – ',
      amountAccent: '25k',
      bestFor: 'Best for small businesses',
      features: [
        'Modern landing page',
        'Mobile responsive',
        'Fast & optimized',
        'Contact / inquiry form',
        'Basic SEO setup',
      ],
      ctaLabel: 'Get Started →',
      ctaLink: 'https://forms.gle/FLViRjhekjbE1D7LA',
      ctaStyle: 'outline',
      featured: false,
    },
    {
      tier: 'Professional',
      amount: 'NPR 25k – ',
      amountAccent: '50k',
      bestFor: 'Best for growing businesses',
      features: [
        'Multi-page website',
        'SEO & performance setup',
        'Business branding',
        'Better user experience',
        'Conversion-focused design',
        '1 month post-launch support',
      ],
      ctaLabel: 'Start This Plan →',
      ctaLink: 'https://forms.gle/FLViRjhekjbE1D7LA',
      ctaStyle: 'solid',
      featured: true,
    },
    {
      tier: 'Advanced',
      amount: 'NPR ',
      amountAccent: '50k+',
      bestFor: 'Best for advanced needs',
      features: [
        'Web applications',
        'Booking systems',
        'Dashboards & portals',
        'Custom functionality',
        'Scalable & future-ready',
      ],
      ctaLabel: 'Discuss Project →',
      ctaLink: 'https://forms.gle/FLViRjhekjbE1D7LA',
      ctaStyle: 'outline',
      featured: false,
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