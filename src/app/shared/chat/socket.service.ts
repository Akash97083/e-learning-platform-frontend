import { Injectable } from '@angular/core';
import {io, Socket} from "socket.io-client";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public joinedId = new BehaviorSubject(null);
  public leavedId = new BehaviorSubject(null);
  public newMessage = new BehaviorSubject(null);
  public socket: Socket;

  constructor() {
    this.socket = io('localhost:3000', { path: '/socket' }); //https://live.datnikon.com/
    this.hanleUserConnect();
    this.handleNewMessage();
  }

  public joinRoom(roomId: string, userId: string): void {
    this.socket.emit('join-room', roomId, userId);
  }

  public chat(content: string): void {
    this.socket.emit('chat', content);
  }

  private hanleUserConnect(): void {
    this.socket.on('user-connected', (userId:any) => {
      this.joinedId.next(userId);
    })
    this.socket.on('user-disconnected', (userId:any) => {
      this.leavedId.next(userId);
    })
  }

  private handleNewMessage(): void {
    this.socket.on('new-message', (content:any) => {
      this.newMessage.next(content);
    })
  }
}
