import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  usuario:string='';
  pwd: string ='';
  constructor(private userService:UserService) { }

  ngOnInit() {}
  submit(){
    console.log({email:this.usuario, password:this.pwd})
    this.userService.login({email:this.usuario, password:this.pwd})
    .then(response =>{
      console.log("Se entro correctamente!")
      console.log(response);
    })
    .catch(error=>console.log(error))
  }

}
