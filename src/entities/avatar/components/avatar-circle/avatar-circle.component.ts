import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pw-avatar-circle',
  templateUrl: './avatar-circle.component.html',
  styleUrls: ['./avatar-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarCircleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
