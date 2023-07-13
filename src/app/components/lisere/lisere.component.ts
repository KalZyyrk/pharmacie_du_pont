import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lisere',
  templateUrl: './lisere.component.html',
  styleUrls: ['./lisere.component.css'],
})
export class LisereComponent {
  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => this.getLinkTrad());
  }
  list: string[] = [''];
  flags: { name: string; language: string; flag: string }[] = [
    { name: 'Français', language: 'fr', flag: '../../assets/fr_flag.svg' },
    { name: 'German', language: 'de', flag: '../../assets/de_flag.svg' },
    { name: 'English', language: 'en', flag: '../../assets/en_flag.svg' },
  ];

  useLang(language: string): void {
    this.translate.use(language);
  }

  getLinkTrad(): void {
    this.translate.get('banner').subscribe((res) => (this.list = res));
  }
}
