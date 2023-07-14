import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpeningTimeService {
  openingHour: Date = new Date();
  closingHour: Date = new Date();
  currentTime: Date = new Date();
  OpenDay: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  constructor() {
    this.openingHour.setHours(9, 0, 0);
    this.closingHour.setHours(19, 0, 0);
  }

  getTimer(): { hour: number; minute: number; status: boolean } {
    let hourLeft: number;
    let minuteLeft: number;
    let status: boolean;
    if (
      this.currentTime > this.openingHour &&
      this.currentTime < this.closingHour
    ) {
      status = true;
      hourLeft = this.closingHour.getHours() - this.currentTime.getHours();
      minuteLeft = 60 - this.currentTime.getMinutes();
    } else if (this.currentTime > this.closingHour) {
      hourLeft = 24 - this.currentTime.getHours() + this.openingHour.getHours();
      minuteLeft = 60 - this.currentTime.getMinutes();
      status = false;
    } else {
      hourLeft = this.openingHour.getHours() - this.currentTime.getHours();
      minuteLeft = 60 - this.currentTime.getMinutes();
      status = false;
    }

    return { hour: hourLeft, minute: minuteLeft, status: status };
  }
}
