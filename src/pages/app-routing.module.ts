import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageModule, NotFoundPage } from 'src/pages/not-found'
import { HomeModule, HomePage } from 'src/pages/home';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'not-found', component: NotFoundPage },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [HomeModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
