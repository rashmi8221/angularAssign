import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  n:number=0
  @Output() numberEmited:EventEmitter<number> = new EventEmitter<number>();
  constructor() {  }

  ngOnInit(): void {
  }
  onStart() {
    this.interval = setInterval(() => {
      this.n++;
      this.numberEmited.emit(this.n);
    }, 1000)
  }
  onStop(){
    if (this.interval) {
      clearInterval(this.interval);
   }
  }
}
