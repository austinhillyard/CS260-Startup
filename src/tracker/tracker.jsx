import React from 'react';
import "./tracker.css"
import { GameView } from './gameView';

export function Tracker() {
  //TODO Finish this component obviously.

  const [games, setGames] = React.useState([]);
  const [gamesString, setGamesString] = React.useState("");

  class Game {
    constructor(gameJson) {
      this.name = gameJson.name;
      this.playtime = gameJson.playtime_forever;
      this.gameID = gameJson.appid;
      this.epochTime = gameJson.rtime_last_played;
    }
  }

  React.useEffect(() => {
    setGamesString(localStorage.getItem("games"));
    loadGames()
  }, []);

  const idString = localStorage.getItem("id");
  if (idString != null && gamesString !=null) {
    loadGames();
  }

  return (
    <main className='container-fluid text-center'>
      <GameView/>
    </main>
  );

  async function loadGames(gamesString) {
    let gamesJson = JSON.parse(gamesString);
    for (let game of gamesJson.response.games) {
        games.push(new Game(game));
    }
  }
}