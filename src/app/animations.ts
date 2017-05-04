import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';

export class Animations {

    static redMenuClick() {
        return trigger('redSquareState', this.triggerMenuClick('0'));
    }

    static greenMenuClick() {
        return trigger('greenSquareState', this.triggerMenuClick('-82px'));
    }

    static blueMenuClick() {
        return trigger('blueSquareState', this.triggerMenuClick('-164px'));
    }

    static triggerMenuClick(vPos: string) {
        return [
            state('inactive', style({
                fontSize: '14px',
                height: '80px',
                width: '120px',
                transform: 'translate3d(0, 0, 0)'
            })),
            state('active', style({
                fontSize: '24px',
                height: '382px',
                marginBottom: '-384px',
                width: '1000px',
                transform: 'scale(1) translate3d(120px , ' + vPos + ', 0)'
            })),
            transition('inactive => active',
                [animate(1000, keyframes([
                    style({ offset: 0, width: '120px' }),
                    style({ offset: 0.25, fontSize: '24px', width: '1000px', transform: 'translate3d(120px , 0, 0)' }),
                    style({ offset: 0.5, fontSize: '24px', width: '1000px', transform: 'translate3d(120px , ' + vPos + ', 0)' }),
                    style({ offset: 0.75, height: '382px', marginBottom: '-384px' })])
                )]),
            transition('active => inactive',
                [animate(1000, keyframes([
                    style({ offset: 0.25, height: '80px', marginBottom: '0px' }),
                    style({ offset: 0.5, fontSize: '14px', width: '120px' }),
                    style({ offset: 0.75, transform: 'translate3d(120px , 0, 0)' }),
                    style({ offset: 1, width: '120px', transform: 'translate3d(0 , 0, 0)' })])
                )])
        ];
    }

    static greyMenuAdapt() {
        return trigger('greySquareState', [
            state('inactive', style({
                height: '138px'
            })),
            state('active', style({
                height: '218px'
            })),
            transition('inactive => active',
                [animate('1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06)', keyframes([
                    style({ offset: 0, height: '138px' }),
                    style({ offset: .5, height: '218px' })
                ])
                )]),
            transition('active => inactive',
                [animate('1.5s cubic-bezier(0.23, 1, 0.32, 1)', keyframes([
                    style({ offset: 0, height: '218px' }),
                    style({ offset: 0.75, height: '138px' })
                ])
                )]),
        ]);
    }

    static displayParagraph() {
        return trigger('showParagraph', [
            state('inactive', style({
                opacity: 0
            })),
            state('active', style({
                opacity: 1
            })),
            transition('inactive => active', animate('500ms 500ms ease-in-out')),
            transition('active => inactive', animate('100ms ease-in-out'))
        ]);
    }

}
