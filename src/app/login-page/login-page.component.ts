import { Component } from '@angular/core';
import {AppService} from "../shared/app.service";
import { Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  isSubmited: boolean = false;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly appService: AppService,
              private readonly router: Router) {

    const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern(emailPattern)]],

      password: ['', [Validators.required]]
    });

  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.isSubmited=true;
    if (this.loginForm.valid) {
      const username = this.loginForm.controls['email'].value;
      const password = this.loginForm.controls['password'].value;
      this.appService.login(username, password);

      if (this.appService.isLogged()) {
        this.router.navigate(['/']);
      } 
    }
  }
}
