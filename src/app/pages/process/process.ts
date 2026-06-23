import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
declare const lucide: any;

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.html',
  styleUrls: ['./process.css']
})
export class Process implements AfterViewInit {
  constructor(private scrollAnim: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    // Render the lucide icons inside the hexagons
    lucide.createIcons();
    setTimeout(() => lucide.createIcons(), 0);
    setTimeout(() => lucide.createIcons(), 100);
    setTimeout(() => lucide.createIcons(), 400);
    setTimeout(() => this.scrollAnim.init(), 50);
  }
}