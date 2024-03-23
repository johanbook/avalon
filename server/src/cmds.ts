import { IMessage } from "./types";

export function execute(message: IMessage): IMessage {
  if (!message.id) {
    return { type: "SetId", id: "" + Math.random() };
  }

  return { type: "ok", message: "hi" } as any;
}
