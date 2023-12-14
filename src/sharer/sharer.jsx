import React from 'react';
import "./sharer.css"
import "../tracker/gameTimeView"
import { GameTimeView } from '../tracker/gameTimeView';
import { json } from 'react-router-dom';

const myId = makeid(10);

export function Sharer() {

  

  const [userlists, setUserlists] = React.useState([]);
  const [isButtonDisabled, setButtonDisabled] = React.useState(false);
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  const ping = {id:"ping"};

  React.useEffect(() => {
  socket.onopen = function () {
      let t = setInterval(function(){
          if (socket.readyState != 1) {
              clearInterval(t);
              return;
          }
          socket.send(JSON.stringify(ping));
      }, 55000);
  };
  socket.onmessage = async (event) => {
    event.data.text().then(dataText => {
      console.log(dataText);
      const msg = JSON.parse(dataText);
      if (msg.id !== myId && msg.id !== "ping") {
        console.log("MESSAGE RECEIVED: " + msg);
        addGames(msg.games, false);
      }
    });  
  };
  return function cleanup() {
    socket.close();
  };
}, []);

  function share() {
    const oneWeekGames = JSON.parse(localStorage.getItem("oneWeekGames"));
    console.log(oneWeekGames);
    
    shareGames(oneWeekGames);
    addGames(oneWeekGames, true);

  }

  function shareGames(oneWeekGames) {
    const event = {
        games: oneWeekGames,
        id: myId
    }
    console.log("SENDING JSON TEXT: " + JSON.stringify(event));
    socket.send(JSON.stringify(event));

  }

  function addGames(oneWeekGames, isMe = false) {
    setUserlists((prevLists) => [...prevLists, <GameTimeView key={prevLists.length} timeFrameId={"user"+prevLists.length} timeFrameText={""} games={oneWeekGames}/>])

    if (isMe) {
      setButtonDisabled(true);
    }

  }

  return (
    <main className='container-fluid text-center'>
      <div id="subheader">
            <h2>Other Logged in Users' Games this Week:</h2>
            <button id="shareButton" disabled={isButtonDisabled} type="button" onClick={share}>Share My Games</button>
        </div>
        <div id="view">
          {userlists}
      </div>
    </main>
  );
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}