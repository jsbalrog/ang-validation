import {AbstractControl, ValidatorFn, FormGroup, ValidationErrors, NG_VALIDATORS, Validator} from '@angular/forms';
import { Directive } from '@angular/core';

export const matchPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const retypePassword = control.get('retypePassword');

    return password && retypePassword && password.value !== retypePassword.value ? { 'matchPassword': true } : null;
  };

  @Directive({
    selector: '[appMatchPassword]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordValidatorDirective, multi: true }]
  })
  export class MatchPasswordValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors {
      return matchPasswordValidator(control);
    }
  }
