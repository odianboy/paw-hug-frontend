import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pw-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthDialogComponent {

  form: FormGroup;
  hide = true;

  constructor() {
    this.form = this.formInit();
  }

  formInit() {
    return new FormGroup({
      mobile: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  submit() {
    console.log( this.form.getRawValue() );
  }

  get iconVisibility(): string {
    return this.hide ? 'visibility_off' : 'visibility';
  }

  get typeInput(): string {
    return this.hide ? 'password' : 'text';
  }

}
