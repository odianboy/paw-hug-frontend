import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import type { UserAvatar } from 'src/shared/api';
import { ElementService } from 'src/shared/api';
import { AvatarService, AvatarValidationService } from '../../model';

@Component({
  selector: 'pw-avatar-plus',
  templateUrl: './avatar-plus.component.html',
  styleUrls: ['./avatar-plus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarPlusComponent {
  readonly iconName: string = 'add';
  @Output() onAddPhoto: EventEmitter<UserAvatar>;
  
  constructor(
    private avatarService: AvatarService,
    private elementService: ElementService,
    private avatarValidationService: AvatarValidationService,
  ) {
    this.onAddPhoto = new EventEmitter<UserAvatar>();
  }

  async addAvatar(event: Event) {
    const target = this.elementService.getTarget(event);
    const file: File = (target.files as FileList)[0];
    
    if (file) {
      if (await lastValueFrom(this.avatarValidationService.syncValidation(file))) {
        return
    }
      const avatar = this.avatarService.createAvatar(file);
      this.onAddPhoto.emit(await avatar);
    }
  }

}
