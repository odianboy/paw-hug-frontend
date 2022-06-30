import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/pages';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from 'src/entities/footer';
import { HeaderModule } from 'src/entities/header';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FooterModule,
    HeaderModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
