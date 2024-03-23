export interface IMessage {
  id?: string;
  message?: string;
  type: string;
}

export interface IError {
  error: true;
  message: string;
}
