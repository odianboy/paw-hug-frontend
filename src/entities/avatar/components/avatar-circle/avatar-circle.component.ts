import {
  Input,
  Output,
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import type { UserAvatar } from 'src/shared/api';

@Component({
  selector: 'pw-avatar-circle',
  templateUrl: './avatar-circle.component.html',
  styleUrls: ['./avatar-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarCircleComponent {
  readonly iconName: string = 'photo_camera';

  @Output() onAddAvatar: EventEmitter<UserAvatar>;
  @Input() avatar: UserAvatar;

  constructor() {
    this.onAddAvatar = new EventEmitter<UserAvatar>();
    this.avatar = {} as UserAvatar;
  }

  addAvatar(avatar: UserAvatar): void {
    this.onAddAvatar.emit(avatar);
  }
}
