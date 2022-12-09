import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuarios';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;
  public usuario: Usuario;

  constructor( private socket: Socket ) { 
    this.checkStatus();
  }

  checkStatus(){
    this.socket.on('connect', ()=>{
      console.log('conectado');
      this.socketStatus = true;
    });
    this.socket.on('disconnect', ()=>{
      console.log('desconectado');
      this.socketStatus = false;
    });
  }

  emit( evento:string, payload?:any, callback?: Function ){
    console.log('emitiendo mensaje');
    
    this.socket.emit( evento, payload, callback );
  }

  listen( evento:string ){
    return this.socket.fromEvent( evento );
  }

  loginWS( nombre: string){
    this.socket.emit('configurar-usuario',{ nombre }, ( resp:any ) =>{
      console.log( resp);
    });

  this.emit( 'configurar-usuario',{ nombre }, (resp: any)=>{
    console.log( resp );
    
  } )
  }
}
