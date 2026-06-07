import { Component, AfterViewInit } from '@angular/core';
import { TiltDirective } from '../../core/directives/tilt.directive';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TiltDirective],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services implements AfterViewInit {
  constructor(private scrollAnim: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollAnim.init(), 50);
  }
}