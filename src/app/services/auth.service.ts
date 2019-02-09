import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly authServerUrl = 'http://localhost:8081';
  public readonly loginUrl = this.authServerUrl + '/auth/realms/asref1/protocol/openid-connect/token';

  public accessToken = '';
  public fullLooginResponse: Object;

  constructor(private http: HttpClient) { }

  login(userid: string, password: string): Promise<boolean> {

    console.log('login attempt for:', userid);

    const promise = new Promise<boolean>((resolve, reject) => {
      this.http.post(
        this.loginUrl,
        `grant_type=password&username=${userid}&password=${password}&client_id=asref1-test-client&scope=`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).subscribe(data => {
        console.log(data);
        this.accessToken = data['access_token'];
        this.test(data);
        this.fullLooginResponse = data;
        resolve(true);
      }, error => {
        reject(error);
      });
    });

    return promise;

  }

  logout() {

  }

  private test(token: Object) {
    console.log('not-before-policy:', token['not-before-policy']);
  }
}
