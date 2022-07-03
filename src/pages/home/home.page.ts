import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pw-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
