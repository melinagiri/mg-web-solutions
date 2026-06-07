import { Injectable, OnDestroy } from '@angular/core';

/**
 * Global scroll animation service.
 * Call init() once from AppComponent.ngAfterViewInit()
 * to observe all .fade-in elements across the page.
 */
@Injectable({ providedIn: 'root' })
export class ScrollAnimationService implements OnDestroy {
  private observer: IntersectionObserver | null = null;

  init(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });

    document.querySelectorAll('.fade-in').forEach(el => this.observer!.observe(el));
  }

  /** Call after dynamic content is added to pick up new .fade-in elements. */
  refresh(): void {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      this.observer?.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}