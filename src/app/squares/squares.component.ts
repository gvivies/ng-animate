import { Component } from '@angular/core';
import { Animations } from './squares.animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.css'],
  animations: [
    Animations.redMenuClick(),
    Animations.greenMenuClick(),
    Animations.blueMenuClick(),
    Animations.greyMenuAdapt(),
    Animations.displayParagraph()
  ]
})
export class SquaresComponent {

  private redState = 'inactive';
  private greenState = 'inactive';
  private blueState = 'inactive';
  private greyState = 'inactive';
  private showBlue = 'inactive';
  private showRed = 'inactive';
  private showGreen = 'inactive';

  constructor() { }

  clickOnBlue(): void {
    this.blueState = (this.blueState === 'inactive') ? 'active' : 'inactive';
    this.greyState = this.blueState;
    this.showBlue = (this.showBlue === 'inactive') ? 'active' : 'inactive';
    this.redState = 'inactive';
    this.greenState = 'inactive';
    this.showGreen = 'inactive';
    this.showRed = 'inactive';
  }

  clickOnRed(): void {
    this.redState = (this.redState === 'inactive') ? 'active' : 'inactive';
    this.greyState = this.redState;
    this.showRed = (this.showRed === 'inactive') ? 'active' : 'inactive';
    this.blueState = 'inactive';
    this.greenState = 'inactive';
    this.showGreen = 'inactive';
    this.showBlue = 'inactive';
  }

  clickOnGreen(): void {
    this.greenState = (this.greenState === 'inactive') ? 'active' : 'inactive';
    this.greyState = this.greenState;
    this.showGreen = (this.showGreen === 'inactive') ? 'active' : 'inactive';
    this.redState = 'inactive';
    this.blueState = 'inactive';
    this.showRed = 'inactive';
    this.showBlue = 'inactive';
  }

}
