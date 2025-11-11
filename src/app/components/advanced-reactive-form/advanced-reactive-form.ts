import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators, AsyncValidatorFn } from '@angular/forms';
import { catchError, delay, map, of } from 'rxjs';

@Component({
  selector: 'app-advanced-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './advanced-reactive-form.html',
  styleUrl: './advanced-reactive-form.css',
})
export class AdvancedReactiveForm {
  form: FormGroup;


  // Custom Validators (SYNCHRONOUS VALIDATOR)

  static nameValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value;
      if (!value) return null;
      const regex = /^[a-zA-Z\s]+$/;
      return regex.test(value) ? null : { invalidName: { value } };
    }
  }

  private emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return of(null);
      }

      // SIMULATE API CALL with 1 second delay

      return of(control.value).pipe(
        delay(1000),
        map(email => {
          const existingEmails = ['test@example.com', 'ameer@gmail.com', 'maryam@gmail.com'];
          const isTaken = existingEmails.includes(email);
          return isTaken ? { emailExists: 'This email is already taken' } : null;
        }),

        catchError(error => {
          console.error('Validation error', error);
          return of(null)
        })
      )
    }
  }

  constructor(private fb: FormBuilder) {
    // CUSTOM VALIDATORS EXAMPLE.
    this.form = this.fb.group({

      user: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2), AdvancedReactiveForm.nameValidator()]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['',
          [Validators.required, Validators.email],
          this.emailExistsValidator()
        ]
      }),

      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', [Validators.required, Validators.pattern('[0-9]{5}')]]
      })
    })
  }

  onSubmit() { }
}
