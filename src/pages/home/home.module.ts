import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitModule } from 'src/shared/ui';

import { HomePage } from './home.page';
import { HeaderModule } from 'src/entities/header';
import { FooterModule } from 'src/entities/footer';

@NgModule({
  imports: [
    CommonModule,
    UiKitModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomeModule { }
