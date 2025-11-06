import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  imports: [FormsModule, CommonModule],
  templateUrl: './subject-demo.html',
  styleUrl: './subject-demo.css',
})
export class SubjectDemo {
private subject = new Subject<string>();
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
