import { Observable } from '@nativescript/core';

export class CalendarViewModel extends Observable {
    private _startDate: Date;
    private _selectedPattern: string;
    private _schedule: any[];
    private _patterns: string[];

    constructor() {
        super();
        
        this._startDate = new Date();
        this._patterns = [
            "14/14 (2 weeks on/off)",
            "14/21 (2 weeks on/3 off)",
            "21/21 (3 weeks on/off)",
            "28/28 (4 weeks on/off)"
        ];
        this._schedule = [];
        this._selectedPattern = this._patterns[0];
        
        this.generateSchedule();
    }

    get startDate(): Date {
        return this._startDate;
    }

    set startDate(value: Date) {
        if (this._startDate !== value) {
            this._startDate = value;
            this.notifyPropertyChange('startDate', value);
            this.generateSchedule();
        }
    }

    get patterns(): string[] {
        return this._patterns;
    }

    get schedule(): any[] {
        return this._schedule;
    }

    onDateSelected(args: any) {
        const picker = args.object;
        this.startDate = picker.date;
    }

    onPatternSelected(args: any) {
        const picker = args.object;
        this._selectedPattern = this._patterns[picker.selectedIndex];
        this.generateSchedule();
    }

    private generateSchedule() {
        const schedule = [];
        const currentDate = new Date(this._startDate);
        const [workDays, offDays] = this.parsePattern(this._selectedPattern);
        let isWorkPeriod = true;

        for (let i = 0; i < 365; i++) {
            const remainingDays = isWorkPeriod ? workDays : offDays;
            schedule.push({
                date: new Date(currentDate),
                isWorkDay: isWorkPeriod,
                isTransitionDay: i === 0 || remainingDays === 1
            });

            currentDate.setDate(currentDate.getDate() + 1);
            if (schedule.length % (workDays + offDays) === 0) {
                isWorkPeriod = !isWorkPeriod;
            }
        }

        this._schedule = schedule;
        this.notifyPropertyChange('schedule', schedule);
    }

    private parsePattern(pattern: string): [number, number] {
        const matches = pattern.match(/(\d+)\/(\d+)/);
        if (matches) {
            return [parseInt(matches[1]), parseInt(matches[2])];
        }
        return [14, 14]; // Default pattern
    }
}