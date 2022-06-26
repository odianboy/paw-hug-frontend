import {
  Input,
  Output,
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import type { UserAvatar } from 'src/shared/api';
import  { ElementService } from 'src/shared/api';

@Component({
  selector: 'pw-avatar-circle',
  templateUrl: './avatar-circle.component.html',
  styleUrls: ['./avatar-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarCircleComponent {
  readonly iconName: string = 'photo_camera';
  readonly iconNameEnter: string = 'cloud_download';
  readonly circleColor: string = '#f9f7ea';
  readonly whiteColor: string = '#fff';
  readonly circleBorder: string = 'dotted 4px black';
  readonly circleNoBorder: string = 'none';
  readonly circleOpacity: string = '1';
  readonly noCoverClass: string = 'no-cover';
  readonly avatarCoverClass: string = 'avatar-cover';
  isIcon: boolean = true;
  buttonPlus: boolean = true;
  @ViewChild('circle') circle: ElementRef<HTMLElement>;

  @Output() onAddAvatar: EventEmitter<UserAvatar>;
  @Input() avatar: UserAvatar;

  constructor(
    private elementService: ElementService,
    private renderer: Renderer2,
  ) {
    this.onAddAvatar = new EventEmitter<UserAvatar>();
    this.avatar = {} as UserAvatar;
    this.circle = {} as ElementRef<HTMLElement>;
  }

  addAvatar(avatar: UserAvatar): void {
    this.onAddAvatar.emit(avatar);
  }

  get icon() {
    return this.isIcon ? this.iconName : this.iconNameEnter;
  }

  imageOver(event: Event) {
   if (
    this.elementService.checkClassName(event, this.noCoverClass) ||
    this.elementService.checkClassName(event, 'icon')
    ) {
    this.renderer.setStyle(this.circle.nativeElement, 'background', this.circleColor);
    this.renderer.setStyle(this.circle.nativeElement, 'border', this.circleNoBorder);
    this.buttonPlus = false;
    this.isIcon = false;
   } else if (this.elementService.checkClassName(event, this.avatarCoverClass)){
    this.elementService.getTarget(event).style.opacity = `${+this.circleOpacity / 2}`;
   }
  }

  imageLeave(event: Event) {
    if (this.elementService.checkClassName(event, this.noCoverClass)) {
      this.renderer.setStyle(this.circle.nativeElement, 'background', this.whiteColor);
      this.renderer.setStyle(this.circle.nativeElement, 'border', this.circleBorder);
      this.buttonPlus = true;
      this.isIcon = true;
    } else if (this.elementService.checkClassName(event, this.avatarCoverClass)){
      this.elementService.getTarget(event).style.opacity = this.circleOpacity;
    }
  }

  imageDrop(event: Event) {
    if (this.elementService.checkClassName(event, this.noCoverClass)) {
      this.renderer.setStyle(this.circle.nativeElement, 'background', this.whiteColor);
      this.renderer.setStyle(this.circle.nativeElement, 'border', this.circleBorder);
      this.buttonPlus = true;
      this.isIcon = true;
    } else if (this.elementService.checkClassName(event, this.avatarCoverClass)) {
      this.elementService.getTarget(event).style.opacity = this.circleOpacity;
    }
  }
}
