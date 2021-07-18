import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private RestService: RestService) { }
  public username:string ="";
  public password:string = "";
  public activo : boolean = false;

  ngOnInit(): void {
    this.verificar_login()
  }

  public auth(){
    if(this.username.trim() && this.password.trim()){
      this.RestService.Get_Service(`https://limitless-fortress-59985.herokuapp.com/Persona/auth/${this.username}/${this.password}`)
      .subscribe(respuesta => {
        var resp: any = respuesta;
        console.log(resp);
        this.activo = true
        localStorage.setItem('user', JSON.stringify(resp))
      })
    }else{
      console.log("Error en username o password")
    }
  }

  public verificar_login(){
    if(localStorage.getItem('user')){
      this.activo = true
    }else{
      this.activo = false
    }
  }

}
