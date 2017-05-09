import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';

export class Animations {

    static displaySquares() {
        return trigger('showSquares', [
            state('inactive', style({
                opacity: '0',
                height: '0',
                transform: 'translate3d(-100%, 0, 0)'
            })),
            state('active', style({
                height: '640px',
                opacity: 1,
                transform: 'translate3d(0, 0, 0)'
            })),
            transition('inactive => active', animate('200ms 200ms ease-out')),
            transition('active => inactive', animate('200ms ease-out'))
        ]);
    }

        static displayFabs() {
        return trigger('showFabs', [
            state('inactive', style({
                opacity: '0',
                height: '0',
                transform: 'translate3d(-100%, 0, 0)'
            })),
            state('active', style({
                opacity: '1',
                height: '640px',
                transform: 'translate3d(0, 0, 0)'
            })),
            transition('inactive => active', animate('200ms 200ms ease-out')),
            transition('active => inactive', animate('200ms ease-out'))
        ]);
    }

}
