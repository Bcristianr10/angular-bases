import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <p>{{ counter }}</p>
        <button (click)="increaseBy(-1)">-1</button>
        <button (click)="resetValue()">Reset</button>
        <button (click)="increaseBy(+1)" >+1</button>    
    `
})
export class CounterComponent {
    public counter:number = 10;

    increaseBy(value: number):void{    
      this.counter += value    
      if(this.counter <= 0) this.counter = 0
    }
  
    resetValue(){
      this.counter = 10;
    }
}