import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count = 0;

  increment(){
    this.count++;
  }

  get countValue(){
    return this.count;
  }
}
