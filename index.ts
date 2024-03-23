import uWS from "uWebSockets.js";
import pino from "pino";
import { IError, IMessage } from "./types";
import { execute } from "./cmds";

const PORT = 8083;

const app = uWS.App();

const logger = pino({
  level: "debug",
  transport: {
    target: "pino-pretty",
  },
});

const decoder = new TextDecoder("utf-8");

app.ws("/*", {
  close: () => {
    logger.debug("WebSocket closed");
  },
  message: (ws, rawMessage, isBinary) => {
    let message: IMessage;

    try {
      message = JSON.parse(decoder.decode(rawMessage));
    } catch (err) {
      logger.error("Failed to parse message");

      const error: IError = { error: true, message: "Unable to parse message" };
      ws.send(JSON.stringify(error), isBinary, true);
      return;
    }

    logger.debug({ msg: "Recived message", type: message.type });

    const result = execute(message);

    ws.send(JSON.stringify(result), isBinary, true);
  },
  open: (ws) => {
    logger.debug("WebSocket opened", {
      address: ws.getRemoteAddressAsText(),
    });
  },
});

app.listen(PORT, (socket) => {
  if (socket) {
    logger.info(`Listening on port ${PORT}`);
  } else {
    logger.error("Failed to listen");
  }
});
