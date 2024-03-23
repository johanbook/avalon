import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { WebSocketService } from './websocket.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), WebSocketService],
};
