import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
declare const lucide: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services implements AfterViewInit {
  constructor(private scrollAnim: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    lucide.createIcons();
    setTimeout(() => this.scrollAnim.init(), 50);
  }
}