import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  providers: any;
  constructor(private http: HttpClient) {}

  getProvidersList(): Observable<any> {
    return this.http
      .get('http://localhost:3000/api/providers')
      .pipe(map(data => (this.providers = data)));
  }
}
