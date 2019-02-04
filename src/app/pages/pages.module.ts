import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './../modules/ui/ui.module';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { BasicComponent } from './basic/basic.component';
import { Oauth2Component } from './oauth2/oauth2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [NoAuthComponent, BasicComponent, Oauth2Component, PageNotFoundComponent],
  imports: [
    CommonModule,
    UiModule,
  ]
})
export class PagesModule { }
