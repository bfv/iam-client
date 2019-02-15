import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { KeycloakAngularModule } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './modules/ui/ui.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './modules/components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    KeycloakAngularModule,
    UiModule,
    PagesModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
