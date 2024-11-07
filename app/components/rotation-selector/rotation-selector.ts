import { EventData } from '@nativescript/core';
import { CalendarViewModel } from '../../view-models/calendar-view-model';

export function onDateSelected(args: EventData) {
    const vm = args.object.page.bindingContext as CalendarViewModel;
    vm.onDateSelected(args);
}

export function onPatternSelected(args: EventData) {
    const vm = args.object.page.bindingContext as CalendarViewModel;
    vm.onPatternSelected(args);
}