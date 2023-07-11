import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navLinks = [
    { name: 'Accueil', link: '/home' },
    { name: 'Nos Produits', link: '/product' },
    { name: 'Nos Services', link: '/service' },
    { name: 'Nos Marques', link: '/brand' },
    { name: 'Contact', link: '/contact' },
  ];

  isActive: boolean = false;

  toggleNavMenu() {
    this.isActive = !this.isActive;
  }
}
