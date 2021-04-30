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
    
    this.user = this.userRegisterFormGroup.get('newUser').value;
    this.user.role = "http://localhost:8080/api/user-role/2";

    this.userService.registerUser(this.user).subscribe(data => {
      let subscriber = {
        points: 0,
        user_id: "http://localhost:9090/api/users"+data.id
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
