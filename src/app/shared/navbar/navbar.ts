import { Component, HostListener, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  menuOpen = false;
  scrolled = false;
  activeSection = 'home';

  private sections = ['home', 'about', 'resume', 'projects', 'articles-preview', 'contact'];
  private scrollListener!: () => void;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollListener = () => this.onScroll();
      window.addEventListener('scroll', this.scrollListener, { passive: true });
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled = window.scrollY > 50;

    // Detect active section
    const offset = 120;
    for (const id of [...this.sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        this.activeSection = id;
        return;
      }
    }
    this.activeSection = 'home';
  }

  navigateTo(section: string): void {
    this.menuOpen = false;
    if (this.router.url === '/' || this.router.url === '') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/'], { fragment: section });
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}

