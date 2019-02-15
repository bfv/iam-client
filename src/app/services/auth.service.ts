import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject } from 'rxjs';
import { isFulfilled } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authServerUrl = 'http://localhost:8081';
  readonly tokenUrl = this.authServerUrl + '/auth/realms/asref1/protocol/openid-connect/token';
  readonly authUrl = this.authServerUrl + '/auth/realms/asref1/protocol/openid-connect/auth';
  accessToken = '';
  fullLoginResponse: Object;

  private loggedInSource = new BehaviorSubject<boolean>(false);
  loggedIn = this.loggedInSource.asObservable();

  constructor(private http: HttpClient, private keycloak: KeycloakService) {

    this.keycloak.init(
      {
        config: {
          clientId: 'angular-test-client',
          realm: 'asref1',
          url: 'http://keycloak.bfv.io:8081/auth'
        },
        initOptions: {
          flow: 'implicit'
        },
        bearerExcludedUrls: [
          'http://localhost:15900/noauth',
          'http://localhost:15900/oauth2',
          'http://localhost:8081/auth/realms/asref1/protocol/openid-connect/token'
        ]
      }).then(() => {

        this.keycloak.isLoggedIn().then(loggedIn => {
          this.setLoggedIn(loggedIn);
        });
      });
  }

  login(userid: string, password: string): Promise<boolean> {

    console.log('login attempt for:', userid);

    const promise = new Promise<boolean>((resolve, reject) => {
      this.http.post(
        this.tokenUrl,
        `grant_type=password&username=${userid}&password=${password}&client_id=asref1-test-client&scope=`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).subscribe(data => {

        this.accessToken = data['access_token'];
        this.fullLoginResponse = data;

        resolve(true);
      }, error => {
        reject(error);
      });
    });

    return promise;

  }

  logout() {
    this.accessToken = '';
    this.fullLoginResponse = null;
  }

  implicitLogin(): void {
    const promise = this.keycloak.login();
  }

  implicitLogout() {
    this.keycloak.logout();
  }

  private setLoggedIn(loggedIn: boolean) {
    this.loggedInSource.next(loggedIn);
  }
}
