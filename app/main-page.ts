import { NavigatedData, Page } from '@nativescript/core';
import { CalendarViewModel } from './view-models/calendar-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new CalendarViewModel();
}