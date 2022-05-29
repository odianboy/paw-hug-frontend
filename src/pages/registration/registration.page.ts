import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'pw-registration',
    templateUrl: './registration.page.html',
    styleUrls: ['./registration.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPage {
  form: FormGroup;
  nameIconWrite = 'mode_edit';

  constructor(private fb: FormBuilder) {
    this.form = this.formInit();
  }

  formInit() {
    return this.fb.group({
      name: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    })
  }
}