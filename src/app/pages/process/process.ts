import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.html',
  styleUrls: ['./process.css']
})
export class Process implements AfterViewInit {
  constructor(private scrollAnim: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollAnim.init(), 50);
  }
}