import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modelo/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL = 'http://localhost:8080:/api/users';

  constructor(private httpClient: HttpClient ) { }

  registerUser(user: User): Observable<any>{
    return this.httpClient.post<User>(this.userURL, user);
  }


}
