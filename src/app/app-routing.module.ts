import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthComponent } from './pages/no-auth/no-auth.component';
import { BasicComponent } from './pages/basic/basic.component';
import { Oauth2Component } from './pages/oauth2/oauth2.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'no-auth', component: NoAuthComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'oauth2', component: Oauth2Component },
  { path: '', redirectTo: '/no-auth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
