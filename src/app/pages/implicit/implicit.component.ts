import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PasoeOauth2BackendService } from 'src/app/services/pasoe-oauth2-backend.service';

@Component({
  selector: 'app-implicit',
  templateUrl: './implicit.component.html',
  styleUrls: ['./implicit.component.css']
})
export class ImplicitComponent implements OnInit {

  loggedIn = false;
  response = '';
  accessToken: string;

  constructor(private auth: AuthService, private backend: PasoeOauth2BackendService) { }

  ngOnInit() {
    this.auth.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    this.auth.implicitAccessToken.subscribe(token => {
      this.accessToken = token;
    })
  }

  login() {
    this.auth.implicitLogin();
  }

  logout() {
    this.auth.implicitLogout();
  }

  getCustomers() {
    this.backend.getCustomersImplicit()
      .subscribe(data => {
        this.response = JSON.stringify(data, null, 2);
      },
      error => {
        this.response = 'error fetching data: ' + error;
      });
  }
}
