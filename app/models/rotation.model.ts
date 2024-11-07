export interface RotationPattern {
    daysOn: number;
    daysOff: number;
    name: string;
}

export const ROTATION_PATTERNS: RotationPattern[] = [
    { name: '14/14', daysOn: 14, daysOff: 14 },
    { name: '14/21', daysOn: 14, daysOff: 21 },
    { name: '21/21', daysOn: 21, daysOff: 21 },
    { name: '14/28', daysOn: 14, daysOff: 28 }
];

export interface RotationDay {
    date: Date;
    isWorkDay: boolean;
    isTransitionDay: boolean;
}