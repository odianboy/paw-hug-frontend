import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'pw-button-mini-fab',
  templateUrl: './button-mini-fab.component.html',
  styleUrls: ['./button-mini-fab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonMiniFabComponent implements OnInit {

  @Input() tooltipName: string;
  @Input() typeButton: string;

  constructor() {
    this.tooltipName = '';
    this.typeButton = 'button';
  }

  ngOnInit() {
  }

}
