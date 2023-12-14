import React from 'react';
import "./tracker.css"
import { GameView } from './gameView';
import { getOwnedGames } from '../import/getOwnedGames';

export function Tracker() {
  //TODO Finish this component obviously.

  class Game {
    constructor(gameJson) {
      this.name = gameJson.name;
      this.playtime = gameJson.playtime_forever;
      this.lastPlayed = this.getTimeFrame(gameJson.rtime_last_played);
      this.gameID = gameJson.appid;
      this.epochTime = gameJson.rtime_last_played;
      this.formattedLastPlayed = this.getLastPlayed();
      this.formattedPlaytime = this.getTimePlayed();
    }

    getTimeFrame(lastPlayed) {
      if (lastPlayed != 0) {
          let date = new Date(0);
          date.setUTCSeconds(lastPlayed);
          return date;
      }
      else {
          return "Never Played";
      }
    }

    getTimePlayed() {
        return "Time Played: " + Math.floor(this.playtime / 60) + "hr " + this.playtime % 60 + "min";
    }

    getLastPlayed() {
        if (this.lastPlayed === "Never Played") {
            return this.lastPlayed;
        }
        else {
            return "Last Played: " + this.lastPlayed.toDateString();
        }
    }
  }

  // React.useEffect(() => {
  //   setGamesString(localStorage.getItem("games"));
  //   console.log("Got gamesString from local storage.")
  //   loadGames()
  // }, [refreshData]);

  const idString = localStorage.getItem("id");
  const gamesString = localStorage.getItem("games");
  const games = [];
  if (idString != null && gamesString !=null) {
    console.log("gamesString check happened!")
    loadGames(gamesString);


    return (
      <main className='container-fluid text-center'>
        {/* <div className="PriorityList">
          <GameView games={} viewId="priorityList" timeFrameText="Priority List"/>
        </div> */}
        <div className="Games">
          <div className='gamesTop'>
            <h1>Games</h1>
            <button type="button" onClick={() => (refreshData())}>Refresh</button>
          </div>
          <div className="Dropdowns">
          </div>
          <GameView games={games} viewId="GameView" timeSort={true} timeFrameText=""/>
        </div>
        {/* <div className="Backlog">
          <GameView viewId="backlog" timeFrameText="Backlog"/>
        </div> */}
      </main>
    );
  }
  else {
    return (
    <main className="container-fluid text-center notFound">
      <h1>No games detected for user. Please use the import tool.</h1>
    </main>
    );
  }


  async function refreshData() {
    await getOwnedGames(localStorage.getItem("id"));
}

  async function loadGames(gamesString) {
    let gamesJson = JSON.parse(gamesString);
    for (let game of gamesJson.response.games) {
        games.push(new Game(game));
    }
  }
}