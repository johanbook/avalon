interface IJoinGameMessage {
  id: string;
  gameId: string;
  type: "JoinGame";
}

interface IStartGameMessage {
  id: string;
  name: string;
  type: "StartGame";
}

interface ISetIdMessage {
  id: string;
  type: "SetId";
}

export type IMessage = IJoinGameMessage | IStartGameMessage | ISetIdMessage;

export interface IError {
  error: true;
  message: string;
}

export interface IGame {
  id: string;
  name: string;
}

export interface IPlayer {
  id: string;
  name: string;
}
