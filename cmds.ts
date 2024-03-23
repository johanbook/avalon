import { IMessage } from "./types";

export function execute(message: IMessage): IMessage {
  if (!message.id) {
    return { type: "set-id", id: "" + Math.random() };
  }

  return { type: "ok", message: "hi" };
}
