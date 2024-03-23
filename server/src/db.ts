import { IGame, IPlayer } from "./types";

class DB {
  private games: Record<string, IGame> = {};
  private players: Record<string, IPlayer> = {};

  getGame(id: string): IGame | undefined {
    return this.games[id];
  }

  getPlayer(id: string): IPlayer | undefined {
    return this.players[id];
  }

  getState() {
    return { games: this.games, players: this.players };
  }
}

export const db = new DB();
