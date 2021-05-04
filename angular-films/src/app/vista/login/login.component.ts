import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modelo/user';
import swal from 'sweetalert2';
import { LoginService } from 'src/app/modelo/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userRegisterFormGroup: FormGroup;
  user: User;


  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { 
    this.user = new User;
  }

  ngOnInit(): void {
    this.userRegisterFormGroup = this.formBuilder.group({
      sesion: this.formBuilder.group({
        userName: [''],
        password: [''],
      })
    });
  }

  onSubmit(){
    
    this.user = this.userRegisterFormGroup.get('sesion').value;
    if(this.user.userName == '' || this.user.password == ''){
      swal.fire('Error inicio de sesion', 'Usuario o contraseña vacias!', 'error');
      return;
    }

    this.loginService.login(this.user).subscribe(response => {

      let payload = JSON.parse(atob(response.access_token.split(".")[1]));


      this.loginService.saveUsername(response.access_token);
      this.loginService.saveToken(response.access_token);
      this.loginService.saveId(response.id);
      

      this.router.navigate(['/catalogo-peliculas'])
      swal.fire('Login', `Hola ${payload.user_name}, has iniciado sesion con exito`, 'success');
    });

  }

  
}