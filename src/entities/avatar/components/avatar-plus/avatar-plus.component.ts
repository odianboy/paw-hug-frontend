import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pw-avatar-plus',
  templateUrl: './avatar-plus.component.html',
  styleUrls: ['./avatar-plus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarPlusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
