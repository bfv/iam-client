import { Component } from '@angular/core';
import { PasoeBackendService } from './services/pasoe-backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'client';
  response = '';
  tabs = [
    { link: '/no-auth', title: 'No Auth' },
    { link: '/basic', title: 'Basic' },
    { link: '/oauth2', title: 'OAuth2' },
    { link: '/implicit', title: 'Implicit' },
  ];

  constructor(private backend: PasoeBackendService) {}

  test() {
    // this.backend.get(true)
    this.backend.getCustomers(true)
      .subscribe(data => {
        this.response = JSON.stringify(data, null, 2);
      },
      error => {
        this.response = 'error fetching data: ' + error;
      });
  }

}

