import { Injectable } from "@angular/core";
import { lastValueFrom, Observable, Subscriber } from "rxjs";
import { UserAvatar } from "src/shared/api";

@Injectable({
    providedIn: 'root',
})
export class AvatarService {

    async createAvatar(file: File): Promise<UserAvatar> {
        const file$ = new Observable( (sub: Subscriber<string>) => {           
            this.readFile(file, sub);
        });

        const avatar: UserAvatar = {
            name: file.name,
            size: file.size,
            type: file.type,
            url:  await lastValueFrom(file$)
        }

        return avatar;
    }

    readFile(file: File, sub: Subscriber<string>) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            sub.next(fileReader.result as string);
            sub.complete();
        };
    }
}