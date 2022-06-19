import {
  Component,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'pw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  @Input() textTooltip: string;
  @Output() onClickButton: EventEmitter<Event>;

  constructor() {
    this.onClickButton = new EventEmitter<Event>();
    this.textTooltip = '';
  }

  clickBtn(event: Event): void {
    this.onClickButton.emit(event);
  }

}
