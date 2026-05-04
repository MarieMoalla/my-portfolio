import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAos]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input('appAos') animation: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' = 'fade-up';
  @Input() aosDelay = 0;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    el.style.setProperty('--anim-delay', `${this.aosDelay}ms`);
    el.classList.add('aos-init', `aos-${this.animation}`);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('aos-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
