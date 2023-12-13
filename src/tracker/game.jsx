import React from 'react';
import "./game.css"

export function Game({ name, gameID, epochTime, playtime }) {
  
    return (
    <div className='game'>
      <p>{name}</p>
      <p>Time Played: {Math.floor(playtime / 60)}hr {playtime%60}min</p>
      <p>{getLastPlayed(epochTime)}</p>
    </div>
  );

    function getTimeFrame(epochSeconds) {
        if (epochSeconds != 0) {
            let date = new Date(0);
            date.setUTCSeconds(epochSeconds);
            return date;
        }
        else {
            return "Never Played";
        }
    }

    function getLastPlayed(epochSeconds) {

        let lastPlayed = getTimeFrame(epochSeconds);

        if (lastPlayed === "Never Played") {
            return lastPlayed;
        }
        else {
            return "Last Played: " + lastPlayed.toDateString();
        }
    }

}