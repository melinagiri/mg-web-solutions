import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
declare const lucide: any;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements AfterViewInit {
  year = new Date().getFullYear();
  isHome = true;

  constructor(private router: Router) {
    this.isHome = this.router.url === '/' || this.router.url === '';
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const url = (e.urlAfterRedirects || e.url || '').split('#')[0];
        this.isHome = url === '/' || url === '';
        setTimeout(() => lucide.createIcons(), 0);
      });
  }

  ngAfterViewInit(): void {
    lucide.createIcons();
    setTimeout(() => lucide.createIcons(), 100);
  }
}