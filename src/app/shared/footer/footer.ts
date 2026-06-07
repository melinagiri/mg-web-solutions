import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  year = new Date().getFullYear();

  // links = [
  //   { label: 'About',     path: '/about' },
  //   { label: 'Services',  path: '/services' },
  //   { label: 'Pricing',   path: '/pricing' },
  //   { label: 'Process',   path: '/process' },
  //   { label: 'Portfolio', path: '/portfolio' },
  //   { label: 'Contact',   path: '/contact' },
  // ];
}