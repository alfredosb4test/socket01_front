import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  nombre = '';

  constructor( public wsService: WebsocketService,
              private router: Router ){

  }

  ingresar(){
    this.wsService.loginWS( this.nombre )
    .then( () =>{
      this.router.navigateByUrl('/mensajes');
    });
  }
}
