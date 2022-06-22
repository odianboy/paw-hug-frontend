import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { fromEvent, map, Observable, take } from "rxjs";
import { ValidationComponent } from "src/shared/ui/components";

@Injectable({
    providedIn: 'root',
})
export class AvatarValidationService {
    constructor(public dialog: MatDialog) {}

    checkType(file: File): boolean {
        const fileType = 'image/jpeg';
        const message = `Можно загрузить изображение только формата - ${fileType}.`;

        if (file.type !== fileType) {
            this.openDialog(message);
        }
        return file.type !== fileType;
    }

    openDialog(message: string): void {
        this.dialog.open(ValidationComponent, {
            data: {
                text: message
            },
            panelClass: 'dialog',
        })
    }

    syncValidation(file: File): boolean {
        // const image = this.loadImage(file);

        // return fromEvent(image, 'load').pipe(
        //     map( () => this.validation(file) ),
        //     take(1)
        // )
        return this.validation(file)
    }

    loadImage(file: File): HTMLImageElement {
        const imageSrc = URL.createObjectURL(file);
        const image = new Image();
        image.src = imageSrc;

        return image;
    }

    validation(file: File): boolean {
        return this.checkType(file);
    }
}