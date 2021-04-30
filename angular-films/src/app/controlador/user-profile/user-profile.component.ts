import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserProfileService } from 'src/app/modelo/user-profile/user-profile.service';
import { User } from './user';

@Component({
  selector: 'app-user-profile',
  templateUrl: '../../vista/user-profile/user-profile.component.html',
  styleUrls: ['../../vista/user-profile/user-profile.component.css']
})



export class UserProfileComponent implements OnInit {

  users: User[] = [];
  user: User = new User;

  constructor(private servicioUser:UserProfileService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  listarUsers(){
    this.servicioUser.getUsers().subscribe(data =>{this.users = data._embedded.users})
  
    //this.router.navigateByUrl(`/catalogo-peliculas/${id}`);
  }

  getUser(){
    //Este id de parámetro debe venir del usuario loggeado
    this.servicioUser.getUser(7).subscribe(data =>{this.user = data})
  
    //this.router.navigateByUrl(`/catalogo-peliculas/${id}`);
  }

  //Para que Guarde Cambios con el boton, toca reemplazar el Id por el del usuario loggeado en el getUser
  Updatebtn(){
    this.servicioUser.patchUser(this.user.id,this.user).subscribe(data =>{this.user = data;})
  }

  //PAra que elimine el usuario con el boton eliminar
  deletebtn(){
    this.servicioUser.deleteUser(this.user.id);
    console.log(this.user.id)
  }
}
