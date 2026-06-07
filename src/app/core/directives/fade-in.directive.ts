import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[fadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit {
  @Input() fadeInDelay: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add('fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, this.fadeInDelay + i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });
    observer.observe(this.el.nativeElement);
  }
}