import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective implements OnInit, OnDestroy {
  @Input('appTilt') strength: [number, number] = [8, 6];

  private el!: HTMLElement;
  private onMove  = (e: MouseEvent) => this.handleMove(e);
  private onLeave = () => this.handleLeave();

  constructor(private ref: ElementRef) {}

  ngOnInit(): void {
    this.el = this.ref.nativeElement;
    this.el.addEventListener('mousemove', this.onMove);
    this.el.addEventListener('mouseleave', this.onLeave);
  }

  ngOnDestroy(): void {
    this.el.removeEventListener('mousemove', this.onMove);
    this.el.removeEventListener('mouseleave', this.onLeave);
  }

  private handleMove(e: MouseEvent): void {
    const r = this.el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    this.el.style.transform =
      `perspective(700px) rotateY(${x * this.strength[0]}deg) rotateX(${-y * this.strength[1]}deg)`;
  }

  private handleLeave(): void {
    this.el.style.transform = '';
  }
}