import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { matchPasswordValidator } from './PasswordValidation';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="form-control"
          formControlName="password"
          [formGroup]="myForm">
      </div>
      <div class="form-group">
        <label for="retypePassword">Retype password</label>
        <input
          type="password"
          id="retypePassword"
          name="retypePassword"
          class="form-control"
          formControlName="retypePassword"
          [formGroup]="myForm">
      </div>
      <div class="alert alert-danger" *ngIf="myForm.errors?.matchPassword">Passwords must match</div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = new FormGroup({
      'password': new FormControl(),
      'retypePassword': new FormControl()
    }, { validators: matchPasswordValidator });
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
