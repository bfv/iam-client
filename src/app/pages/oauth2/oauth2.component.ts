import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';

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
  public tokenExpanded = true;
  public dataExpanded = false;

  public authTokens: Object;

  public model = new LoginData();

  submitted = false;


  constructor(private auth: AuthService, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  login() {
    this.state = 'hello!';
    this.loggedIn = !this.loggedIn;
  }

  logout() {
    this.loggedIn = !this.loggedIn;
  }

  submit() {

    this.submitted = true;
    this.auth.login(this.model.userid, this.model.password).then(result => {
      this.loginExpanded = false;
      this.dataExpanded = true;
      this.authTokens = this.auth.fullLooginResponse;
      this.snackbar.open('login successful!', null, {
        duration: 1500
      });
    });
  }
}
