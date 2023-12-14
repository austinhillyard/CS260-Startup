import React from 'react';
import "./gameTimeView.css"
import { Game } from './game';

export function GameTimeView({timeFrameId, timeFrameText, games}) {

  games.sort((a, b) => b.epochTime - a.epochTime);

  const gameComponents = []

  for (const [i, game] of games.entries()) {
    gameComponents.push(
      <Game 
      key={i} 
      name={game.name} 
      gameID={game.gameID} 
      lastPlayed={game.formattedLastPlayed} 
      playtime={game.formattedPlaytime}/>
    );
  }

  return (
    <>
    <h2>{timeFrameText}</h2>
    <hr/>
    <div id={timeFrameId} className='gameTimeView'>
      {gameComponents}  
    </div>
    </>
  );
}