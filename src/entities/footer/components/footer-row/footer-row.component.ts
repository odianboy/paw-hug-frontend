import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pw-footer-row',
  templateUrl: './footer-row.component.html',
  styleUrls: ['./footer-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
