import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  constructor(private http: HttpClient) {}

  getProvidersList() {
    this.http.get('http://localhost:3000/api/providers').subscribe(data => {
      console.log(data);
    });
  }
}
