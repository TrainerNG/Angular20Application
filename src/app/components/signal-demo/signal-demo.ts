import { Component, effect, inject } from '@angular/core';
import { SharedData } from '../../services/shared-data';

@Component({
  selector: 'app-signal-demo',
  imports: [],
  templateUrl: './signal-demo.html',
  styleUrl: './signal-demo.css',
})
export class SignalDemo {
sharedData = inject(SharedData);

constructor(){
  effect(()=>{
    const value = this.sharedData.signalsCounter();
    console.log('Signals Component: Counter updated to ', value);
  })
}
}
