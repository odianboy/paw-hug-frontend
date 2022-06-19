import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import type { UserAvatar } from 'src/shared/api';
import { AvatarService } from '../../model';

@Component({
  selector: 'pw-avatar-plus',
  templateUrl: './avatar-plus.component.html',
  styleUrls: ['./avatar-plus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarPlusComponent {
  readonly iconName: string = 'add';
  @Output() onAddPhoto: EventEmitter<UserAvatar>;
  
  constructor(private avatarService: AvatarService) {
    this.onAddPhoto = new EventEmitter<UserAvatar>();
  }

  async addAvatar(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    
    if (file) {
      const avatar = this.avatarService.createAvatar(file);
      this.onAddPhoto.emit(await avatar);
    }
  }

}
