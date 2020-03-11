import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiModule } from './../modules/ui/ui.module';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { Oauth2Component } from './oauth2/oauth2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentsModule } from '../modules/components/components.module';
import { ImplicitComponent } from './implicit/implicit.component';

@NgModule({
  declarations: [NoAuthComponent, Oauth2Component, PageNotFoundComponent, ImplicitComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    UiModule,
  ]
})
export class PagesModule { }
