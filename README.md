# Melina Giri Portfolio — Angular 17

A full Angular 17 conversion of the original single-file portfolio site.

## Project Structure

```
src/
├── index.html                  ← Meta tags, gtag, LD+JSON, font links
├── main.ts                     ← bootstrapApplication (standalone)
├── styles.css                  ← All 1790 lines of global CSS
└── app/
    ├── app.component.*         ← Root shell, mounts all sections
    ├── directives/
    │   ├── fade-in.directive.ts    ← Per-element scroll reveal
    │   └── tilt.directive.ts       ← 3D hover tilt on cards
    ├── models/
    │   └── project.model.ts        ← ProjectSlide, ProjectDetail, ContactForm
    ├── services/
    │   ├── theme.service.ts        ← Dark/light toggle + localStorage
    │   ├── modal.service.ts        ← Signal-based modal open/close
    │   ├── contact.service.ts      ← EmailJS wrapper
    │   ├── projects.service.ts     ← All project data
    │   └── scroll-animation.service.ts  ← Global IntersectionObserver
    └── components/
        ├── nav/          ← Fixed nav, scroll-spy, hamburger menu, theme btn
        ├── hero/         ← Animated hexagon SVG + CTA
        ├── stats/        ← Animated counters (IntersectionObserver)
        ├── about/        ← Why-MG card with tilt effect
        ├── services/     ← 3 service cards with mini app mockups + tilt
        ├── pricing/      ← 3 pricing tiers with tilt
        ├── process/      ← 5-step process grid
        ├── experience/   ← Work history cards (Shakta, CloudFactory, CITYLAB)
        ├── projects/     ← Interactive project slider with live screen mockups
        ├── contact/      ← Two-way bound form + EmailJS submit
        ├── footer/       ← Footer links + dynamic year
        └── modal/        ← Full case-study modal, signal-driven
```

## Setup

```bash
npm install
ng serve
```

Open http://localhost:4200

## EmailJS Configuration

Open `src/app/services/contact.service.ts` and replace:

```ts
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

Steps:
1. Sign up at https://www.emailjs.com (free)
2. Add an Email Service (Gmail) → copy Service ID
3. Create a template with variables: `{{from_name}}`, `{{from_email}}`, `{{service}}`, `{{message}}`
4. Go to Account → copy your Public Key

## Production Build

```bash
ng build
```

Output goes to `dist/melinagiri-portfolio/`.

## Angular Patterns Used

| Pattern | Where |
|---|---|
| Standalone components (no NgModule) | Every component |
| Angular Signals | `ModalService.activeProject` |
| `@HostListener` | NavComponent (scroll/resize/keydown), ModalComponent (Escape) |
| `[(ngModel)]` two-way binding | ContactComponent form fields |
| `*ngFor` / `*ngIf` / `[ngClass]` | Projects slider, Modal, About |
| Custom attribute directives | `TiltDirective`, `FadeInDirective` |
| `IntersectionObserver` | StatsComponent (counters), ScrollAnimationService (fade-ins) |
| Dependency injection | All services via constructor |
| `AfterViewInit` | AppComponent → init scroll animations |
