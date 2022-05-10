import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { ButtonComponent, IconComponent, ButtonSubmitComponent } from './components';

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    ButtonSubmitComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
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
  ]
})
export class UiKitModule {}
