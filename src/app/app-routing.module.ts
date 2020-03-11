import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthComponent } from './pages/no-auth/no-auth.component';
import { Oauth2Component } from './pages/oauth2/oauth2.component';
import { ImplicitComponent } from './pages/implicit/implicit.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'no-auth', component: NoAuthComponent },
  { path: 'direct', component: Oauth2Component },
  { path: 'implicit', component: ImplicitComponent },
  { path: '', redirectTo: '/no-auth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
