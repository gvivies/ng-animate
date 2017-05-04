import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private squaresVisible = true;
  private fabsVisible = false;

  showSquares() {
    this.squaresVisible = true;
    this.fabsVisible = false;
  }

  showFabs() {
    this.fabsVisible = true;
    this.squaresVisible = false;
  }

}
