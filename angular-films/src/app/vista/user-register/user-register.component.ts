import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/modelo/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userRegisterFormGroup: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

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
    
    console.log(this.userRegisterFormGroup.get('newUser').get.name);
    this.user.name = this.userRegisterFormGroup.get('newUser').value.name;
    this.user.surname = this.userRegisterFormGroup.get('newUser').value.surname;
    this.user.userName = this.userRegisterFormGroup.get('newUser').value.userName;
    this.user.password = this.userRegisterFormGroup.get('newUser').value.password;
    this.user.email = this.userRegisterFormGroup.get('newUser').value.email;
    this.user.role = "http://localhost:8080/api/user-role/1";

    this.userService.registerUser(this.user);

  }

}
