import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'pw-footer-icon',
  templateUrl: './footer-icon.component.html',
  styleUrls: ['./footer-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterIconComponent {

  @Input() hrefName: string;
  @Input() srcName: string;
  @Input() textTooltip: string;
  @Input() altName: string;
  @Input() heightSize: string;
  @Input() widthSize: string;
  @Input() tooltipPosition: TooltipPosition;


  constructor() {
    this.hrefName = '';
    this.textTooltip = '';
    this.srcName = '';
    this.altName = '';
    this.heightSize = '';
    this.widthSize = '';
    this.tooltipPosition = 'right';
  }
}
