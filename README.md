# MG Web Solutions — Angular 17 Portfolio

## Project Structure

```
src/
├── index.html
├── main.ts
├── styles.css                        ← All global CSS (1790 lines)
└── app/
    ├── app.ts                        ← Root component (AppComponent)
    ├── app.html                      ← Root template
    ├── app.css
    ├── app.config.ts                 ← ApplicationConfig (provideAnimations)
    ├── app.routes.ts                 ← Routes (empty — single page)
    ├── app.spec.ts
    │
    ├── core/
    │   ├── models/
    │   │   └── project.model.ts      ← ProjectSlide, ProjectDetail, ContactForm, WhyItem
    │   ├── services/
    │   │   ├── theme.service.ts      ← Dark/light toggle + localStorage
    │   │   ├── modal.service.ts      ← Signal-based modal open/close
    │   │   ├── contact.service.ts    ← EmailJS wrapper
    │   │   ├── projects.service.ts   ← All project slide + detail data
    │   │   └── scroll-animation.service.ts  ← Global IntersectionObserver
    │   └── directives/
    │       ├── tilt.directive.ts     ← 3D hover tilt on cards
    │       └── fade-in.directive.ts  ← Per-element scroll reveal
    │
    ├── shared/
    │   ├── navbar/
    │   │   ├── navbar.ts             ← Scroll-spy, hamburger, theme toggle
    │   │   ├── navbar.html
    │   │   ├── navbar.css
    │   │   └── navbar.spec.ts
    │   ├── footer/
    │   │   ├── footer.ts             ← Dynamic year
    │   │   ├── footer.html
    │   │   ├── footer.css
    │   │   └── footer.spec.ts
    │   └── modal/
    │       ├── modal.ts              ← Signal-driven case-study modal
    │       ├── modal.html
    │       ├── modal.css
    │       └── modal.spec.ts (add as needed)
    │
    └── pages/
        ├── hero/       hero.ts / hero.html / hero.css / hero.spec.ts
        ├── stats/      stats.ts (animated counters)
        ├── about/      about.ts (TiltDirective on why-MG card)
        ├── services/   services.ts (TiltDirective on service cards)
        ├── pricing/    pricing.ts (TiltDirective on pricing cards)
        ├── process/    process.ts
        ├── experience/ experience.ts
        ├── projects/   projects.ts (interactive slider + per-screen mockups)
        └── contact/    contact.ts ([(ngModel)] + EmailJS form)
```

## Quick Start

```bash
npm install
ng serve
# → http://localhost:4200
```

## EmailJS Setup

Edit `src/app/core/services/contact.service.ts`:

```ts
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

Template variables: `{{from_name}}`, `{{from_email}}`, `{{service}}`, `{{message}}`

## Run Tests

```bash
ng test
```

## Production Build

```bash
ng build
# Output: dist/mg-web-solutions/
```

## Angular Patterns

| Pattern | Used in |
|---|---|
| Standalone components | Every component (no NgModule) |
| Angular Signals | `ModalService.activeProject` |
| `@HostListener` | Navbar (scroll/resize/Escape), Modal (Escape) |
| `[(ngModel)]` two-way binding | Contact form |
| `*ngFor` / `*ngIf` / `[ngClass]` | About, Projects, Modal |
| Custom attribute directives | `TiltDirective`, `FadeInDirective` |
| `IntersectionObserver` | Stats counters, ScrollAnimationService |
| `ApplicationConfig` + `appConfig` | main.ts bootstrap |
| `AfterViewInit` | AppComponent → scroll animations |
