import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _user: User;
  private _token: string;
  private _id: string;

  private authURL ='http://localhost:8080/oauth/token';
  private credenciales = btoa('angularapp' + ':'+'12345');
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
                                        'Authorization': 'Basic ' + this.credenciales});

  constructor(private http: HttpClient) { }

  public get user(): User{
    if(this._user != null ){
      return this._user
    }else if(this._user == null && sessionStorage.getItem('user') != null){
      this._user = JSON.parse(sessionStorage.getItem('user')) as User;
      return this._user;
    }
    return new User;

  }

  public get token(): string{
    if(this._token != null ){
      return this._token
    }else if(this._token == null && sessionStorage.getItem('token') != null){
      this._token = sessionStorage.getItem('user');
      return this._token;
    }
    return null;
  }

  public get id(): string{
    if(this._id != null ){
      return this._id
    }else if(this._id == null && sessionStorage.getItem('id') != null){
      this._id = JSON.parse(sessionStorage.getItem('id')) as string;
      return this._id;
    }
    return this._id;
  }

  login(user: User): Observable<any>{

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', user.userName);
    params.set('password', user.password);

    return this.http.post(this.authURL, params.toString(), {headers: this.httpHeaders })

  }
  

  saveUsername(accessToken: string){
    let payload = this.obtenerDatosToke(accessToken);
    this._user = new User();
    this._user.role = payload.authorities;
    sessionStorage.setItem('user', JSON.stringify(this._user));
  }

  saveToken(accessToken: string){
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  saveId(id: string){
    this._id=id;
    sessionStorage.setItem('id', id);
    console.log(this._id);
  }

  obtenerUsuario(accessToken: string){
    this._user = new User();

  }

  obtenerDatosToke(accessToken: string){
    if(accessToken != null){
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  hasRole(role : string): boolean {
    if(this.user.role == role){
      return true;
    }
    return false;
  }
}
