import { Injectable } from '@angular/core';
import { ActivityPeriod } from '../models/ActivityPeriod';

@Injectable({
  providedIn: 'root'
})
export class ActivityPeriodService {
  constructor() {}

  getActivityPeriodAM() {
    const activityWeekAM = new ActivityPeriod("AM", new Date(), new Date())
    activityWeekAM.start.setHours(8, 0)
    activityWeekAM.end.setHours(12, 30)
  }
}
