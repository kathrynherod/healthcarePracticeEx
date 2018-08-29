import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor(private http: HttpClient) {}

  getMembersList() {
    this.http.get('http://localhost:3000/api/members').subscribe(data => {
      console.log(data);
    });
  }
}
