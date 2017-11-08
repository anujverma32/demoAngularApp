import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pi-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  resetPasswordForm: FormGroup;

  constructor ( formbuilder: FormBuilder ) {
    this.resetPasswordForm = formbuilder.group({
      'password': [ '', Validators.required ],
      'conf_password': [ '', [ Validators.required ] ]
    });
  }

  reset_password() {
    if ( this.resetPasswordForm.status === 'INVALID' ) {
      return;
    }
    const data = this.resetPasswordForm.value;
  }

}
