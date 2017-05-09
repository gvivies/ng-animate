import { Component } from '@angular/core';
import { Animations } from './animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    Animations.displaySquares(),
    Animations.displayFabs()
  ]
})
export class AppComponent {

  private squaresVisible = true;
  private fabsVisible = false;
  private displaySquares = 'active';
  private displayFabs = 'inactive';

  showSquares() {
    this.squaresVisible = true;
    this.fabsVisible = false;
    this.displaySquares = 'active';
    this.displayFabs = 'inactive';
  }

  showFabs() {
    this.fabsVisible = true;
    this.squaresVisible = false;
    this.displaySquares = 'inactive';
    this.displayFabs = 'active';
  }

}
