import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  BrowserLang = this.translate.getBrowserLang();
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use(`${this.BrowserLang}`);
  }
  status = true;
  time = $localize`3h45`;
  numero = '08 78 45 98 67';
  shopStatus = this.status ? `Ferme` : `Ouvre`;
}
