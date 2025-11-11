import { Component, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SharedData } from '../../services/shared-data';

@Component({
  selector: 'app-signal-demo',
  imports: [],
  templateUrl: './signal-demo.html',
  styleUrl: './signal-demo.css',
})
export class SignalDemo {
  sharedData = inject(SharedData);
  private router = inject(Router);
  x = signal(2);// WritableSignal type
  y = signal(3);
  count = signal(0);

  constructor() {
    // effect(()=>{
    //   const value = this.sharedData.signalsCounter();
    //   console.log('Signals Component: Counter updated to ', value);
    // })

    effect((onCleanup) => {
      const interval = setInterval(() => {
        console.log(`Interval count: ${this.count()}`);
      }, 1000);
      // Define the cleanup function to clear the interval
      onCleanup(() => clearInterval(interval));
    });

  }
}
