import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebSocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Avalon';

  constructor(private readonly webSocketService: WebSocketService) {}

  ngOnInit() {
    this.webSocketService.webSocket$.subscribe((message) => {
      console.log(message);
    });
  }
}
