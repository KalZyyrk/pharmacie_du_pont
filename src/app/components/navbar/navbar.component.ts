import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private translate: TranslateService) {
    translate.onLangChange.subscribe(() => this.getNavTrad());
  }
  navLinks: { name: string; link: string; id: string }[] = [
    { name: '', link: '/home', id: 'home' },
    { name: '', link: '/product', id: 'product' },
    { name: '', link: '/service', id: 'service' },
    { name: '', link: '/brand', id: 'brand' },
    { name: '', link: '/contact', id: 'contact' },
  ];

  isActive: boolean = false;

  toggleNavMenu(): void {
    this.isActive = !this.isActive;
  }

  getNavTrad(): void {
    this.navLinks.map((navLink) => {
      this.translate
        .get(`nav.links.${navLink.id}`)
        .subscribe((res) => (navLink.name = res));
    });
  }
}
