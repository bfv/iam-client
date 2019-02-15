import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-implicit',
  templateUrl: './implicit.component.html',
  styleUrls: ['./implicit.component.css']
})
export class ImplicitComponent implements OnInit {

  loggedIn = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

  login() {
    this.auth.implicitLogin();
  }

  logout() {
    this.auth.implicitLogout();
  }
}
