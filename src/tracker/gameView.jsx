import React from 'react';
import "./gameView.css"
import { GameTimeView } from './gameTimeView';

export function GameView({games, timeSort, viewId, timeFrameText}) {
  
  const now = Date.now();
  const oneWeekGames = [];
  const oneMonthGames = [];
  const threeMonthGames = [];
  const sixMonthGames = [];
  const oneYearGames = [];
  const moreThanYearGames = [];
  const neverPlayed = [];

  if (timeSort) {

    putGamesInTimeSlots(games);
    localStorage.setItem("oneWeekGames", JSON.stringify(oneWeekGames));
  
  return (
    <div id={viewId} className='container-fluid text-center gameView'>
      <GameTimeView timeFrameId="oneWeekGames" timeFrameText="Played less than a week ago" games={oneWeekGames}/>
      <GameTimeView timeFrameId="oneMonthGames" timeFrameText="Played less than a month ago" games={oneMonthGames}/>
      <GameTimeView timeFrameId="threeMonthGames" timeFrameText="Played less than 3 months ago" games={threeMonthGames}/>
      <GameTimeView timeFrameId="sixMonthGames" timeFrameText="Played less than 6 months ago" games={sixMonthGames}/>
      <GameTimeView timeFrameId="oneYearGames" timeFrameText="Played less than a year ago" games={oneYearGames}/>
      <GameTimeView timeFrameId="moreThanYearGames" timeFrameText="Played more than a year ago" games={moreThanYearGames}/>
      <GameTimeView timeFrameId="neverPlayed" timeFrameText="Never Played" games={neverPlayed}/>
    </div>
  );
  }
  else {
    return (
      <GameTimeView timeFrameId={viewId} timeFrameText={timeFrameText} games={games}/>
    );
  }

  function putGamesInTimeSlots(games) {
    for (let game of games) {

        //Test if game never played first
        if (game.lastPlayed === "Never Played") {
            neverPlayed.push(game);
            continue;
        }

        //Find time difference between last played and now
        let timeDifference = (now.valueOf() - game.lastPlayed.valueOf()) / 1000;
        
        //One week difference
        if (timeDifference <= 604800) {
            oneWeekGames.push(game);
        }
        //One Month Difference
        else if (timeDifference <= 2629800) {
            oneMonthGames.push(game);
        }
        //Three Month Difference
        else if (timeDifference <= 7889400) {
            threeMonthGames.push(game);
        }
        //Six Month Difference
        else if (timeDifference <= 15778800) {
            sixMonthGames.push(game);
        }
        //One Year Difference
        else if (timeDifference <= 31557600) {
            oneYearGames.push(game);
        }
        //More than 1 Year Difference
        else {
            moreThanYearGames.push(game);
        }
    }
    //Insert one week games into localstorage for sharer functionality
    localStorage.setItem("oneWeekGames", JSON.stringify(oneWeekGames));
}

}