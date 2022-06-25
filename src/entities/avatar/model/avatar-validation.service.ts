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
        const message = 'Можно загружать изображения только формата - jpeg.';
        
        if (file.type !== fileType) {
          this.openDialog(message);
        }
        return file.type !== fileType;
    }

    checkSize(file: File): boolean {
        const maxSizeFile = 2;
        const size = 1024;
        const fileSize = Math.ceil(file.size / size / size );
    
        if (fileSize > maxSizeFile) {
          const message = `Файл не может превышать ${maxSizeFile} МБ.`;
          this.openDialog(message);
        }
        return fileSize > maxSizeFile;
    }

    checkResolution(image: HTMLImageElement): boolean {
        const maxResolution = 1000;
    
        if (image.width > maxResolution || image.height > maxResolution) {
          const message =
          `
            Фото превышает максимально допустимое разрешение ${maxResolution}x${maxResolution}.
          `;
          this.openDialog(message);
        }
    
        return image.width > maxResolution || image.height > maxResolution;
      }

    openDialog(message: string): void {
        this.dialog.open(ValidationComponent, {
            data: {
                text: message
            },
            panelClass: 'dialog',
        })
    }

    syncValidation(file: File): Observable<boolean>{
        const image = this.loadImage(file);

        return fromEvent(image, 'load').pipe(
            map( () => this.validation(file, image) ),
            take(1)
        )
    }

    loadImage(file: File): HTMLImageElement {
        const imageSrc = URL.createObjectURL(file);
        const image = new Image();
        image.src = imageSrc;

        return image;
    }

    validation(file: File, image: HTMLImageElement): boolean {
        return this.checkSize(file) || this.checkResolution(image);
    }
}