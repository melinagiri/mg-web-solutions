import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
declare const lucide: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services implements OnInit, AfterViewInit {
  isPage = false;

  constructor(
    private scrollAnim: ScrollAnimationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isPage = this.router.url === '/services';
  }

  ngAfterViewInit(): void {
    lucide.createIcons();
    setTimeout(() => this.scrollAnim.init(), 50);
  }
}