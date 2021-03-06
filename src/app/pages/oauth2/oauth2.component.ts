import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { PasoeOauth2BackendService } from 'src/app/services/pasoe-oauth2-backend.service';

export class LoginData {
  public userid: string;
  public password: string;
}

@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.css', './../../app.component.css']
})
export class Oauth2Component implements OnInit {

  public state = '';
  public loggedIn = false;
  public loginExpanded = true;
  public tokenExpanded = false;
  public dataExpanded = false;
  public model = new LoginData();

  public authTokens: Object;
  public data: string;

  submitted = false;


  constructor(private auth: AuthService, private backend: PasoeOauth2BackendService, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.loggedIn = false;
    this.tokenExpanded = false;
    this.loginExpanded = true;
    this.authTokens = null;
  }

  submit() {

    this.submitted = true;
    this.auth.login(this.model.userid, this.model.password).then(result => {
      this.loginExpanded = false;
      this.dataExpanded = true;
      this.authTokens = this.auth.fullLoginResponse;
      this.loggedIn = true;
      this.snackbar.open('login successful!', null, {
        duration: 1500
      });
    });
  }

  get() {

    this.backend.get(false)
      .subscribe(data => {
        this.data = JSON.stringify(data, null, 2);
      });
  }
}
