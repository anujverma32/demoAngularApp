import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor ( formbuilder: FormBuilder, private router: Router ) {
    this.loginForm = formbuilder.group({
      'email': [ '', [ Validators.required, Validators.email ]],
      'password': [ '', Validators.required ]
    });
  }

  login() {
    if ( this.loginForm.status === 'INVALID' ) {
      return;
    }
    const data = this.loginForm.value;
    localStorage.setItem('isPiconnectLoggedIn', 'loggedInToken');
    this.router.navigate(['dashboard']);
  }
}
