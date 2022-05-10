import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'pw-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSubmitComponent {

  @Input() disabled: boolean;

  constructor() {
    this.disabled = false;
  }
}
