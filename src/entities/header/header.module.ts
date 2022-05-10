import { NgModule } from '@angular/core';
import { UiKitModule } from 'src/shared/ui';

import { AuthDialogModule } from 'src/features/auth-dialog';

import { HeaderRowComponent } from './components'

@NgModule({
    declarations: [HeaderRowComponent],
    imports: [
        UiKitModule,
        AuthDialogModule,
    ],
    exports: [HeaderRowComponent],
})
export class HeaderModule {}