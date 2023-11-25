import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  usuario:string='';
  pwd: string ='';
  msg = '';
  constructor(private userService:UserService, private routes:Router) { }

  ngOnInit() {}
  submit(){
    console.log({email:this.usuario, password:this.pwd})
    this.userService.login({email:this.usuario, password:this.pwd})
    .then(response =>{
      console.log("Se entro correctamente!")
      console.log(response);
      this.routes.navigate(['/feed'])
    })
    .catch(error=>{
      console.log(error)
      this.msg = "La contraseña o usuario es invalido"
    })
  }

}
