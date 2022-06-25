import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import { lastValueFrom } from "rxjs";
import type { UserAvatar } from "src/shared/api";
import { AvatarService, AvatarValidationService } from "../model";

@Directive({
    selector: '[pwAvatarDropZone]',
})
export class AvatarDropZoneDirective {
    @Output() onFileDropped: EventEmitter<UserAvatar>;

    constructor(
        private avatarService: AvatarService,
        private avatarValidationService: AvatarValidationService,
    ) {
        this.onFileDropped = new EventEmitter<UserAvatar>();
    }

    @HostListener('dragover', ['$event'])
    onDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    @HostListener('drop', ['$event'])
    async onDrop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();

        const file = event.dataTransfer?.files[0];

        if (file) {
            if (
                this.avatarValidationService.checkType(file) || 
                await lastValueFrom(this.avatarValidationService.syncValidation(file)))
            {
                return
            }
            const avatar = this.avatarService.createAvatar(file);
            this.onFileDropped.emit(await avatar);
        };
    }
}