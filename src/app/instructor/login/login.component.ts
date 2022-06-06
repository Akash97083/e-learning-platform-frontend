import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  constructor() {
    this.loginForm = new UntypedFormGroup({
        email: new UntypedFormControl('',[Validators.required,Validators.email]),
        password: new UntypedFormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      }
    )
  }
  ngOnInit(): void {}
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  isInvalid(controlName: any) {
    return controlName.errors && controlName.invalid && controlName.touched;
  }
  onSubmit() {
    console.log(this.loginForm);
  }

}
