import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuarios';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService { 
  constructor( public wsService: WebsocketService ) { 
   
  }

  sendMensaje( mensaje: string ){
    const payload = {
      de: this.wsService.getUsuario().nombre,
      cuerpo: mensaje
    }

    this.wsService.emit('mensaje', payload );
  }

  getMessages(){
    return this.wsService.listen('mensaje-nuevo');
  }
}

 