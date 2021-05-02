import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelo/login/login-usuario';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/modelo/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userRegisterFormGroup: FormGroup;
  user: User;


  constructor(private formBuilder: FormBuilder, private userService: UserService

  ) { }

  ngOnInit(): void {
    this.userRegisterFormGroup = this.formBuilder.group({
      newUser: this.formBuilder.group({
        name: [''],
        surname: [''],
        userName: [''],
        password: [''],
        email: ['']
      })
    });
  }

  onSubmit(){
    
    this.user = this.userRegisterFormGroup.get('newUser').value;
    this.user.role = "http://localhost:8080/api/user-role/2";

    this.userService.registerUser(this.user).subscribe(data => {
      let subscriber = {
        points: 0,
        user: "http://localhost:9090/api/users/"+data.id
      };
      this.saveSubscriber(subscriber);
    });

  }

  saveSubscriber(subscriber: any){
    this.userService.registerSubscriber(subscriber).subscribe(data => {
      console.log(data)
    });

  };
}