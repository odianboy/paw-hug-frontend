import { NgModule } from '@angular/core';
import { HeaderModule } from 'src/entities/header';
import { NotFoundRootingModule } from './not-found-routing.module';

import { NotFoundPage } from './not-found.page'

@NgModule({
    declarations: [NotFoundPage],
    imports: [
        HeaderModule,
        NotFoundRootingModule,
    ],
    exports: [NotFoundPage],
})
export class NotFoundPageModule {}