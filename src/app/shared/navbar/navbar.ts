import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit, OnDestroy {
  navIsOpen = false;
  isScrolled = false;
  isHome = false;
  
  private navCloseTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    public themeService: ThemeService,
    private router: Router
  ) { 
    this.router.events
          .pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(() => {
            this.isHome = this.router.url === '/';
          });
    
        this.isHome = this.router.url === '/';
  }
  
  ngOnInit(): void {
    this.themeService.init();
  }

  ngOnDestroy(): void {
    if (this.navCloseTimer) clearTimeout(this.navCloseTimer);
  }

  get themeIcon(): string {
    return this.themeService.isLight ? '☀️' : '🌙';
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleNav(): void {
    this.navIsOpen ? this.closeNav() : this.openNav();
  }

  openNav(): void {
    if (this.navIsOpen) return;
    this.navIsOpen = true;
    if (this.navCloseTimer) clearTimeout(this.navCloseTimer);
    document.body.style.overflow = 'hidden';
  }

  closeNav(): void {
    if (!this.navIsOpen) return;
    this.navIsOpen = false;
    document.body.style.overflow = '';
    // Let the slide-out animation finish before hiding
    this.navCloseTimer = setTimeout(() => {}, 520);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 900) this.closeNav();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape') this.closeNav();
  }
}