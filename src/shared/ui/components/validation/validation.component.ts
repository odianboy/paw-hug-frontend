import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import type { Validation } from 'src/shared/api';

@Component({
  selector: 'pw-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationComponent {
  readonly imageSrc: string = '/assets/validation/lying-cat.png';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Validation
  ) {}

  get image(): string {
    return this.imageSrc;
  }

}
