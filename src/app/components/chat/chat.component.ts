import { NgPluralCase } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { observable, Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit, OnDestroy{
  texto = '';
  public mensajesSubscription: Subscription;
  mensajes: any[] = [];
  elemento: HTMLElement;

  constructor( private chatService: ChatService ){}
  
  enviar(){
    if ( this.texto.trim().length === 0 ) return;
    this.chatService.sendMensaje( this.texto );
    this.texto = '';
  }

  ngOnInit(){
    this.elemento = document.getElementById('chat-mensajes')!;
    this.mensajesSubscription = this.chatService.getMessages()
      .subscribe( msg =>{
        // console.log( msg );
        this.mensajes.push( msg );
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 50);
      });
  }

  ngOnDestroy(){
    this.mensajesSubscription.unsubscribe();
  }
}