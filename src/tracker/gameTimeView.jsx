import React from 'react';
import "./gameView.css"
import { Game } from './game';

export function GameTimeView({timeFrameId, timeFrameText, games}) {

  games.sort((a, b) => b.epochTime - a.epochTime);

  return (
    <>
    <h2>{timeFrameText}</h2>
    <hr/>
    <div id={timeFrameId} className='container-fluid text-center gameTimeView'>
      {games.map((game) => <Game key={game.gameID} name={game.name} gameID={game.gameID} epochTime={game.epochTime} playtime={game.playtime}/>)}
    </div>
    </>
  );
}