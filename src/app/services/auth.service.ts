import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly authServerUrl = 'http://localhost:8081';
  public readonly tokenUrl = this.authServerUrl + '/auth/realms/asref1/protocol/openid-connect/token';
  public readonly authUrl = this.authServerUrl + '/auth/realms/asref1/protocol/openid-connect/auth';
  public accessToken = '';
  public fullLoginResponse: Object;

  constructor(private http: HttpClient) { }

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

  implicitLogin() {

    console.log('implicit login attempt');

  }
}
