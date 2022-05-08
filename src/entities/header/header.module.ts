import { NgModule } from '@angular/core';
import { UiKitModule } from 'src/shared/ui';

import { HeaderRowComponent } from './components'

@NgModule({
    declarations: [HeaderRowComponent],
    imports: [UiKitModule],
    exports: [HeaderRowComponent],
})
export class HeaderModule {}