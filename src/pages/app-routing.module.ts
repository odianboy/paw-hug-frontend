import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPage, NotFoundPageModule } from 'src/pages/not-found'
import { HomeModule, HomePage } from 'src/pages/home';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'registration',
    loadChildren: () => 
    import('./registration/registration.module').then(
      (m) => m.RegistrationModule
    ),
  },
  { path: 'not-found', component: NotFoundPage },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    NotFoundPageModule,
    HomeModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
