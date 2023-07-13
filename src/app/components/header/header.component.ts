import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.getStatusTranslate();
    });
  }

  status: boolean = true;
  time: string = `3h45`;
  numero: string = '08 78 45 98 67';
  shopStatus: { value: string } = { value: '' };

  getStatusTranslate(): void {
    const status: string = this.status ? 'header.close' : 'header.open';
    this.translate
      .get(status)
      .subscribe((res) => (this.shopStatus.value = res));
  }
}
