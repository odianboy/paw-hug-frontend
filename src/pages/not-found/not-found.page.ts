import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'pw-not-foun',
    templateUrl: './not-found.page.html',
    styleUrls: ['./not-found.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {
    readonly imageSrc: string = '/assets/not-found/cat.png';

    get image(): string {
        return this.imageSrc;
    }
}