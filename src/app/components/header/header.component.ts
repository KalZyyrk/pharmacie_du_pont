import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OpeningTimeService } from 'src/app/opening-time.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private translate: TranslateService,
    private timer: OpeningTimeService
  ) {
    this.translate.onLangChange.subscribe(() => {
      this.getStatusTranslate();
    });
    const time = timer.getTimer();
    this.time = new Date();
    this.time.setHours(time.hour, time.minute);
    this.status = time.status;
  }
  status: boolean = true;
  time: Date;
  numero: string = '08 78 45 98 67';
  shopStatus: { value: string } = { value: '' };

  getStatusTranslate(): void {
    const status: string = this.status ? 'header.close' : 'header.open';
    this.translate
      .get(status)
      .subscribe((res) => (this.shopStatus.value = res));
  }
}
