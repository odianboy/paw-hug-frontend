import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAvatar } from 'src/shared/api';

@Component({
    selector: 'pw-registration',
    templateUrl: './registration.page.html',
    styleUrls: ['./registration.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPage {
  form: FormGroup;
  hide = true;
  readonly nameIconWrite: string = 'mode_edit';

  constructor(private fb: FormBuilder) {
    this.form = this.formInit();
  }

  formInit() {
    return this.fb.group({
      name: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      avatar: new FormControl(''),
    })
  }

  addAvatar(avatar: UserAvatar) {
    this.form.patchValue(
      {avatar}
    );
  }

  get avatar(): UserAvatar {
    return this.form.controls['avatar'].value;
  }

  get prefixName(): string {
    return this.form.controls['mobile'].dirty ? '+7' : '';
  }

  get iconVisibility(): string {
    return this.hide ? 'visibility_off' : 'visibility';
  }

  get typeInput(): string {
    return this.hide ? 'password' : 'text';
  }

  submit() {
    console.log(this.form.getRawValue());
    
    this.form.reset();
  }
}