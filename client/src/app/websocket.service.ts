import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable()
export class WebSocketService {
  private url = 'ws://localhost:8083';
  private websocket = webSocket(this.url);
  public webSocket$ = this.websocket.asObservable();
}
