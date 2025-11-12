import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './simple-reactive-form.html',
  styleUrl: './simple-reactive-form.css',
})
export class SimpleReactiveForm {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // FORM CONTROL.
      email: ['', [Validators.required, Validators.email]],
      country: ['']
    });

    // this.form = new FormGroup({
    //  name: new FormControl('Sammy'),
    // })
  }

  onSubmit() {
    console.log(this.form.value);

  }

  countries = [
    {
      value: '', label: 'Select country'
    },
    {
      value: 'us', label: 'United States'
    }
  ]

  states: { [key: string]: string[] } = {
    us: ['California', 'Texas', 'NY']
  }

  get nameControl() {
    return this.form.get('name');
  }

  get emailControl() {
    return this.form.get('email');
  }

  get countryControl() {
    return this.form.get('country');
  }

  selectedStates: string[] = []; // ['California' ,'Texas']

  ngOnInit() {

    // REACTIVE
    this.countryControl?.valueChanges.subscribe((country) => { // us // states : us
      this.selectedStates = this.states[country] || [];
      console.log('Country changed to: ', country);
    })
  }

}
