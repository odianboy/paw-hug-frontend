import { NgModule } from '@angular/core';
import { HeaderModule } from 'src/entities/header';

import { NotFoundPage } from './not-found.page'

@NgModule({
    declarations: [NotFoundPage],
    imports: [HeaderModule],
    exports: [NotFoundPage],
})
export class NotFoundPageModule {}