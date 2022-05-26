import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import {
  ButtonComponent,
  IconComponent,
  ButtonSubmitComponent,
  InputComponent,
} from './components';
import { SharedModule } from '../lib';

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    ButtonSubmitComponent,
    InputComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    SharedModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    ButtonComponent,
    IconComponent,
    ButtonSubmitComponent,
    InputComponent,
    SharedModule
  ]
})
export class UiKitModule {}
