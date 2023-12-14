import React from 'react';
import "./game.css"

export function Game({ name, gameID, lastPlayed, playtime }) {
  
    return (
    <div className='game'>
      <p><b>{name}</b></p>
      {lastPlayed !== "Never Played" && <p>{playtime}</p>}
      <p>{lastPlayed}</p>
    </div>
  );

}