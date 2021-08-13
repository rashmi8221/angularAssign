import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num:number[] = [];

  onGameStarted(event:number){
    this.num.push(event)
    console.log(this.num)

  }
}
