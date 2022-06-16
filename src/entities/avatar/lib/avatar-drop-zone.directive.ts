import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import type { UserAvatar } from "src/shared/api";
import { AvatarService } from "../model";

@Directive({
    selector: '[pwAvatarDropZone]',
})
export class AvatarDropZoneDirective {
    @Output() onFileDropped: EventEmitter<UserAvatar>;

    constructor(private avatarService: AvatarService) {
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

        if(file) {
            const avatar = this.avatarService.createAvatar(file);
            this.onFileDropped.emit(await avatar);
        };
    }
}