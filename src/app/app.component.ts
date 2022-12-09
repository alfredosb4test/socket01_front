import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'basico2';
  constructor(
    private wsService: WebsocketService,
    public chatService: ChatService
  ){}

  
}
