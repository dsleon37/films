import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/controlador/user-profile/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<GetResponseUsers> {
    const searchUrl = `${this.baseUrl}/users`;                      
    return this.httpClient.get<GetResponseUsers>(searchUrl);
  };

  //Este id de parámetro debe venir del usuario loggeado
  getUser(id:number): Observable<User> {
    const searchUrl = `${this.baseUrl}/users/${id}`;                      
    return this.httpClient.get<User>(searchUrl);
  };

  //Metodo para modificar usuario
  patchUser(id:number, user:User){
    const searchUrl = `${this.baseUrl}/users/${id}`;
    return this.httpClient.patch<User>(searchUrl, user);
  }

  //Metodo para eliminar usuario

  public deleteUser(id:number) {
    let searchUrl = `${this.baseUrl}/users/${id}`;
    this.httpClient.delete(searchUrl).subscribe(data => {
      console.log(data);
    });
  }


}


interface GetResponseUsers {
  _embedded: {
    users: User[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseUser {
  user: User,
}