import { NgModule } from '@angular/core';
import { UiKitModule } from 'src/shared/ui';
import { SharedModule } from 'src/shared/lib';

import { AuthDialogComponent } from './components';

const EXPORT_COMPONENTS = [AuthDialogComponent];

@NgModule({
    declarations: EXPORT_COMPONENTS,
    imports: [UiKitModule, SharedModule],
    exports: EXPORT_COMPONENTS,
})
export class AuthDialogModule {}