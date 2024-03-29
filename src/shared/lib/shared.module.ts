import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMaskModule, IConfig } from 'ngx-mask';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [NgxMaskModule.forRoot(maskConfig)],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    RouterModule,
  ],
})
export class SharedModule {}