import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor(private http: HttpClient) {}
  members: any;

  //need to add model for members
  getMembersList(): Observable<any> {
    return this.http
      .get('http://localhost:3000/api/members')
      .pipe(map((response: Response) => response));
  }
}
