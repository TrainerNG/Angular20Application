import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject-demo',
  imports: [FormsModule, CommonModule],
  templateUrl: './behaviour-subject-demo.html',
  styleUrl: './behaviour-subject-demo.css',
})
export class BehaviourSubjectDemo {
private subject = new BehaviorSubject<string>('Initial value');
inputValue = '';
messages: string[] = [];

constructor(){
  this.subject.subscribe(message => {
    this.messages.push(`Received : ${message}`) // DYNAMIC VALUE
  })
}

sendMessage(){
  // .next -> SAVING THE DATA., whenever you want the data, then you have to use Subscribe
  this.subject.next(this.inputValue);
  this.inputValue='';
}
}
