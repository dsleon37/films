import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Cinema } from 'src/app/controlador/cinema';
import { LoginService } from 'src/app/modelo/login/login.service';
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
  cinema: Cinema;

  constructor(private formBuilder: FormBuilder, private userService: UserService, public loginService: LoginService) { }

  ngOnInit(): void {
    this.userRegisterFormGroup = this.formBuilder.group({
      newUser: this.formBuilder.group({
        name: new FormControl('', [Validators.required, FormsValidators.notOnlyWhitespace]),
        surname: new FormControl('', [Validators.required, FormsValidators.notOnlyWhitespace]),
        userName: new FormControl('', [Validators.required, FormsValidators.notOnlyWhitespace]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), FormsValidators.notOnlyWhitespace]),
        email: new FormControl('', 
                              [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$')]),
      }),
      newCinema: this.formBuilder.group({
        webSite: [''], //new FormControl('', [Validators.required, FormsValidators.notOnlyWhitespace]),
        address: new FormControl('', [Validators.required, Validators.minLength(10), FormsValidators.notOnlyWhitespace] )
      })
    });
  }

  onSubmit(){

    if(this.loginService.hasRole('admin')){
      this.user = this.userRegisterFormGroup.get('newUser').value;
      this.user.role = {
        id: 3,
        role: "cinema"
      };
      //this.user.password = sha256(this.user.password);
      this.cinema = this.userRegisterFormGroup.get('newCinema').value;

      this.userService.registerUser(this.user).subscribe({
        next: response => {
          let cinema = {
            website: this.cinema.webSite,
            address: this.cinema.address,
            user: "http://localhost:9090/api/users/"+response.id
          };
          this.saveCinema(cinema);
        },
        error: err => {
          alert(`No se registro el usuario: ${err.message}`);
        }
      });
    }else {
      this.user = this.userRegisterFormGroup.get('newUser').value;
      //this.user.role = "http://localhost:8080/api/user-role/2";
      //this.user.password = sha256(this.user.password);
      this.user.role = {
        id: 2,
        role: "subscriber"
      };
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
    
    
  }

  get name(){return this.userRegisterFormGroup.get('newUser.name');}
  get surname(){return this.userRegisterFormGroup.get('newUser.surname');}
  get userName(){return this.userRegisterFormGroup.get('newUser.userName');}
  get password(){return this.userRegisterFormGroup.get('newUser.password');}
  get email(){return this.userRegisterFormGroup.get('newUser.email');}
  get webSite(){return this.userRegisterFormGroup.get('newCinema.webSite');}
  get address(){return this.userRegisterFormGroup.get('newCinema.address');}

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

  saveCinema(cinema: any){
    this.userService.registerCinema(cinema).subscribe({
      next: response => {
        alert(`Se registro el cinema`);
      },
      error: err => {
        alert(`No se registro el cinema: ${err.message}`);
      }
    });

  };

}
