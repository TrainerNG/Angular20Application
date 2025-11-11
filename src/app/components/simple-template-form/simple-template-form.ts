import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-template-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './simple-template-form.html',
  styleUrl: './simple-template-form.css',
})

// INTERFACE VS TYPES

export class SimpleTemplateForm {
onSubmit(form: any){
alert('Submitted:' + JSON.stringify(form.value));
}
}
