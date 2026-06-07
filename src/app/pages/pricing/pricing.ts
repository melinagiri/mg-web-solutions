import { Component, AfterViewInit } from '@angular/core';
import { TiltDirective } from '../../core/directives/tilt.directive';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [TiltDirective],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class Pricing implements AfterViewInit {
  constructor(private scrollAnim: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollAnim.init(), 50);
  }
}