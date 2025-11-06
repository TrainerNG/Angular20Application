import { Component, inject } from '@angular/core';
import { SharedData } from '../../services/shared-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  imports: [],
  templateUrl: './rxjs-demo.html',
  styleUrl: './rxjs-demo.css',
})
export class RxjsDemo {
sharedData = inject(SharedData);
private subscription!: Subscription;

ngOnInit(){
  this.subscription = this.sharedData.rxjsCounter$.subscribe(value => {
    console.log('RXJS Component: counter updated to', value);
  })
}

ngOnDestroy(){
  if(this.subscription){
    this.subscription.unsubscribe();
  }
}
}
