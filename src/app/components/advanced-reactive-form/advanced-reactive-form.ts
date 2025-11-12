import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators, AsyncValidatorFn } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';

@Component({
  selector: 'app-advanced-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './advanced-reactive-form.html',
  styleUrl: './advanced-reactive-form.css',
})
export class AdvancedReactiveForm {
form: FormGroup;


// Custom Validators

static nameValidator():ValidatorFn {
  return (control: AbstractControl)=>{
    const value = control.value;
    if(!value) return null;
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(value) ? null : {invalidName: {value}};
  }
}

constructor(private fb: FormBuilder){ 
  // CUSTOM VALIDATORS EXAMPLE.
  this.form = this.fb.group({

    user: this.fb.group({
      firstName:['' , [Validators.required, Validators.minLength(2), AdvancedReactiveForm.nameValidator()]],
      lastName:['',[Validators.required, Validators.minLength(2)]],
          email:['' ,
        [Validators.required, Validators.email],
        [this.emailExistsValidator()]
      ]
    }),

    address:this.fb.group({
      street:['', Validators.required],
      city:['',Validators.required],
      zip:['' , [Validators.required, Validators.pattern('[0-9]{5}')]]
    })
  })
}

  // Async validator example: Simulates an API call to check if email exists
  private emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      if (!control.value) {
        return of(null);
      }
      
      console.log('Validating email:', control.value);
      
      // Simulate API call with 1 second delay
      return of(control.value).pipe(
        delay(1000),
        map(email => {
          const existingEmails = ['test@example.com', 'user@domain.com'];
          const isTaken = existingEmails.includes(email);
          console.log('Email taken?', isTaken);
          
          return isTaken 
            ? { emailExists: 'This email is already taken' } 
            : null;
        }),
        catchError(error => {
          console.error('Validation error:', error);
          return of(null);
        })
      );
    };
  }

  onSubmit() {}
}
