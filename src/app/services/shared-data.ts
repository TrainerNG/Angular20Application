import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedData {
  // WHENVER we are creating subject, so we have to create obseravble also, so that we can have latest value from it
  private rxjsCounter = new BehaviorSubject<number>(0);
  rxjsCounter$ = this.rxjsCounter.asObservable();

  // SIGNALS

  signalsCounter = signal(0);

  constructor(){
    interval(1000).subscribe(()=>{
      this.rxjsCounter.next(this.rxjsCounter.value + 1);
    })

    setInterval(()=>{
      this.signalsCounter.update(value => value+1);
    },1000);

  }
}
