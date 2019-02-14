import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PasoeOauth2BackendService {
  private baseUrl = 'http://localhost:15900';

  constructor(private http: HttpClient, private auth: AuthService) { }

  get(includeOpenEdgeInfo = false): Observable<Object> {

    let params = new HttpParams();
    if (includeOpenEdgeInfo) {
      params = params.set('openedge', 'true');  // params is IMMUTABLE, so re-assign!
    }

    console.log('access_token:');
    console.log(this.auth.accessToken);

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.auth.accessToken);

    const options = {
      headers: headers,
      params: params
    };

    const observable = this.http.get(this.baseUrl + '/oauth2/web/get', options);

    return observable;
  }
}
