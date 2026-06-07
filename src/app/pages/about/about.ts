import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TiltDirective } from '../../core/directives/tilt.directive';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
import { WhyItem } from '../../core/models/project.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, TiltDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements AfterViewInit {
  readonly whyItems: WhyItem[] = [
    { title: 'Strategy First Approach',      desc: 'Goals before pixels. We plan before we build.' },
    { title: 'Direct Communication',          desc: 'Work directly with the engineer, not an account manager.' },
    { title: 'Enterprise Level Quality',      desc: 'Production-grade code from real enterprise experience.' },
    { title: 'On-time Delivery',              desc: 'Structured process means no missed deadlines.' },
    { title: 'Ongoing Support & Maintenance', desc: 'We stay with you long after launch day.' }
  ];

  constructor(private scrollAnim: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollAnim.init(), 50);
  }
}