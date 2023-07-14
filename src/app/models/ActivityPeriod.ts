export class ActivityPeriod {
    period: string
    start: Date
    end: Date

    constructor(period: string, start: Date, end: Date) {
        this.period = period,
        this.start = start,
        this.end = end
    }
}