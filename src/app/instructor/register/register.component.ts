import { Component, OnInit } from '@angular/core';
import countriesList from '../../shared/Utils/countriesList';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {CustomValidators} from "../../shared/custom-validators";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countriesList = countriesList;
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      passwordConfirmation: new FormControl('',this.checkPasswordMatch()),
      country: new FormControl('Egypt'),
      phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(13)])
    })
  }
  get fullName() { return this.registerForm.get('fullName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get passwordConfirmation() { return this.registerForm.get('passwordConfirmation'); }
  get country() { return this.registerForm.get('country'); }
  get phone() { return this.registerForm.get('phone'); }

  ngOnInit(): void {
  }
  isInvalid(controlName: any) {
    return controlName.errors && controlName.invalid && controlName.touched;
  }
  checkPasswordMatch(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      if (!this.registerForm) return null;
      return this.registerForm && this.password && this.password.value === this.passwordConfirmation?.value ? null: {notSame:true};
    }
  }
  onSubmit() {
    console.log(this.registerForm);
  }

  triggerPasswordValidation() {
    this.registerForm.get('passwordConfirmation')?.updateValueAndValidity();
  }
}
