import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  roteador = inject(Router);

  admin: Usuario = new Usuario();
 

  constructor(){
  }

  logar(){
    
    if(this.admin.usuario == "admin" && this.admin.senha == "admin")
    {
      this.roteador.navigate(['/admin']);
    }
    else
    {
      alert("Senha ou Usuario errado! Tente novamente \nusuario: admin \nsenha: admin")
    }
  }

}
