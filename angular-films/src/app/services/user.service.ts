import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtDTO } from '../modelo/jwt.dto';
import { LoginUsuario } from '../modelo/login/login-usuario';
import { User } from '../modelo/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL = 'http://localhost:8080/api/users';
  private subscriberURL = 'http://localhost:8080/api/subscriber';
  private cinemaURL = 'http://localhost:8080/api/cinema';


  constructor(private httpClient: HttpClient ) { }

  registerUser(user: User): Observable<any>{
    return this.httpClient.post(this.userURL, user);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.userURL + 'login', loginUsuario);
  }

  registerSubscriber(subscriber: any): Observable<any>{
    return this.httpClient.post(this.subscriberURL, subscriber);
  }

  registerCinema(cinema: any): Observable<any>{
    return this.httpClient.post(this.cinemaURL, cinema);
  }


}
