import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  { path: '**',
    loadChildren: () =>
    import('./not-found/not-found.module').then(
      (m) => m.NotFoundPageModule
    )
  },
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
