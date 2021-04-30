import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/modelo/user';
import { UserService } from 'src/app/services/user.service';
import { FormsValidators } from 'src/app/validators/forms-validators';

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
        name: new FormControl('', [Validators.required, FormsValidators.notOnlyWhitespace]),
        surname: new FormControl('', [Validators.required, FormsValidators.notOnlyWhitespace]),
        userName: new FormControl('', [Validators.required, FormsValidators.notOnlyWhitespace]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), FormsValidators.notOnlyWhitespace]),
        email: new FormControl('', 
                              [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$')]),
      })
    });
  }

  onSubmit(){

    if(this.userRegisterFormGroup.invalid){
      this.userRegisterFormGroup.markAllAsTouched();
      return;
    }
    
    this.user = this.userRegisterFormGroup.get('newUser').value;
    this.user.role = "http://localhost:8080/api/user-role/2";

    this.userService.registerUser(this.user).subscribe({
      next: response => {
        let subscriber = {
          points: 0,
          user: "http://localhost:9090/api/users/"+response.id
        };
        this.saveSubscriber(subscriber);
      },
      error: err => {
        alert(`No se registro el usuario: ${err.message}`);
      }
    });

  }

  get name(){return this.userRegisterFormGroup.get('newUser.name');}
  get surname(){return this.userRegisterFormGroup.get('newUser.surname');}
  get userName(){return this.userRegisterFormGroup.get('newUser.userName');}
  get password(){return this.userRegisterFormGroup.get('newUser.password');}
  get email(){return this.userRegisterFormGroup.get('newUser.email');}

  saveSubscriber(subscriber: any){
    this.userService.registerSubscriber(subscriber).subscribe({
      next: response => {
        alert(`Se registro el usuario`);
      },
      error: err => {
        alert(`No se registro el usuario: ${err.message}`);
      }
    });

  };

}
