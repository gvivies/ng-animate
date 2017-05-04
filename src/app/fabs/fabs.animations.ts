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
        return trigger('redFabState', this.triggerMenuClick('-84px'));
    }

    static greenMenuClick() {
        return trigger('greenFabState', this.triggerMenuClick('-168px'));
    }

    static blueMenuClick() {
        return trigger('blueFabState', this.triggerMenuClick('-256px'));
    }

    static triggerMenuClick(vPos: string) {
        return [
            state('inactive', style({
                borderRadius: '30px',
                fontSize: '14px',
                height: '60px',
                width: '60px',
                transform: 'translate3d(0, 0, 0)'
            })),
            state('active', style({
                borderRadius: '12px',
                height: '382px',
                marginBottom: '-408px',
                marginTop: '0px',
                width: '1000px',
                transform: 'translate3d(120px , ' + vPos + ', 0)'
            })),
            transition('inactive => active',
                [animate(600, keyframes([
                    style({ offset: 0, marginTop: '-76px' , height: '40px', marginBottom: '34px' }),
                    style({ offset: 0.2, width: '40px', marginTop: '-66px' , height: '20px', marginBottom: '44px' }),
                    style({ offset: 0.4, width: '60px', transform: 'translate3d(120px , 0, 0)', 
                       height: '60px', marginTop: '-86px', marginBottom: '24px' }),
                    style({ offset: 0.8, width: '1000px', transform: 'translate3d(120px , 0, 0)', 
                       marginBottom: '0px', height: '60px' }),
                    style({ offset: 1, height: '382px', transform: 'translate3d(120px , ' + vPos + ', 0)', 
                       marginTop: '0px', marginBottom: '-408px' })
                    ])
                )]),
            transition('active => inactive',
                [animate(600, keyframes([
                    style({ offset: 0.25, height: '60px', marginTop: '-86px', marginBottom: '0px', 
                      transform: 'translate3d(120px , 0, 0)'}),
                    style({ offset: 0.5, fontSize: '14px', transform: 'translate3d(510px , 0, 0)', borderRadius: '30px', width: '60px' }),
                    style({ offset: 0.75, width: '60px', transform: 'translate3d(0px , 0, 0)' })
                    ])
                )])
        ];
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

    static setHeader() {
        return trigger('headerState',[
            state('inactive', style({
                opacity: 0,
                justifyContent: 'flex-start',
                paddingLeft: '0px',
                paddingRight: '0px'
            })),
            state('active', style({
                opacity: 1,
                justifyContent: 'flex-start',
                paddingLeft: '12px',
                paddingRight: '12px'
            })),
            transition('inactive => active', animate('750ms 250ms ease-in-out')),
            transition('active => inactive', animate('100ms ease-in-out'))
        ]);
    }

}
