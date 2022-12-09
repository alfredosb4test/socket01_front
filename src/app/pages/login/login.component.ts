import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  nombre = '';

  constructor( public wsService: WebsocketService ){

  }

  ingresar(){
    this.wsService.loginWS( this.nombre );
  }
}
