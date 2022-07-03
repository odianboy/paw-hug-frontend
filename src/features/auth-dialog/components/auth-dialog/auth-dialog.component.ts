import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pw-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthDialogComponent {

  form: UntypedFormGroup;
  hide = true;
  readonly nameIconWrite: string = 'mode_edit';

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.formInit();
  }

  formInit() {
    return this.fb.group({
      mobile: new UntypedFormControl(null, [Validators.required, Validators.minLength(10)]),
      password: new UntypedFormControl(null, Validators.required),
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
