import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({}); //form padre
  constructor( private authService: AuthService) { } //Se agrea el authService

  ngOnInit(): void {
    this.formLogin = new FormGroup({ //el formulario para el login
      email: new FormControl('', [  //con formControl( form hijo) se valida el email y la contraseña
        Validators.required, //Es requerido
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required, //Es requerido
        Validators.minLength(6), //minimo 6 digitos
        Validators.maxLength(12) //maximo 12 digitos
      ])
    })
  }

  sendLogin(): void { //Para guardar la sesion y enviarlo
    const {email, password} = this.formLogin.value
    this.authService.sendCredentials(email,password) //Se envian las  credenciales email y password

  }

}

