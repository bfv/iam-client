import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PasoeBackendService {

  private baseUrl = 'http://localhost:15900';

  constructor(private http: HttpClient, private auth: AuthService) { }

  get(includeOpenEdgeInfo = false): Observable<Object> {

    let params = new HttpParams();
    if (includeOpenEdgeInfo) {
      params = params.set('openedge', 'true');  // params is IMMUTABLE, so re-assign!
    }

    const options = {
      params: params
    };

    const observable = this.http.get(this.baseUrl + '/noauth/web/get', options);

    return observable;
  }

  getCustomers(): Observable<Object> {

    const observable = this.http.get(this.baseUrl + '/noauth/web/customer');

    return observable;
  }



}
