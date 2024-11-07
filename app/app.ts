import { Application } from '@nativescript/core';
import { registerElement } from '@nativescript/core';

registerElement('RotationSelector', () => require('./components/rotation-selector/rotation-selector').default);
registerElement('ScheduleList', () => require('./components/schedule-list/schedule-list').default);

Application.run({ moduleName: 'app-root' });