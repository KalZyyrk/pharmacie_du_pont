import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  status = true;
  time = $localize`3h45`;
  numero = '08 78 45 98 67';
  shopStatus = this.status ? $localize`Ferme` : $localize`Ouvre`;
}
