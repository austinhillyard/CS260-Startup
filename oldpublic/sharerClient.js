const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
socket.onopen = function () {
    let t = setInterval(function(){
        if (socket.readyState != 1) {
            clearInterval(t);
            return;
        }
        socket.send('{type:"ping"}');
    }, 55000);
};
socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    addGames(msg.games, msg.userid);
};

function share() {
    const oneWeekGames = JSON.parse(localStorage.getItem("oneWeekGames"));
    console.log(oneWeekGames);
    
    shareGames(oneWeekGames);
    addGames(oneWeekGames, true);

}

//Incremental ID counter to be able to have unique ids for each list of games.
let idCounter = 0

//DOM Functionality for inserting user's games
function addGames(oneWeekGames, isMe = false) {
    let userlist = document.createElement("div");
    userlist.classList.add("userlist");
    userlist.id = "a" + idCounter;
    idCounter++;

    const viewElement = document.getElementById("view")
    viewElement.appendChild(userlist);
    insertGameList(oneWeekGames, userlist.id);
    let hr = document.createElement("hr");
    viewElement.appendChild(hr);

    if (isMe) {
        document.getElementById("shareButton").disabled = true;
    }

}

function shareGames(oneWeekGames) {
    const event = {
        games: oneWeekGames,
    }
    socket.send(JSON.stringify(event));

}

function insertGameList(gameList, id) {
    for (let game of gameList) {
        insertGameCard(game, id);
    }
}

//Inserts the game element into the appropriate div 
function insertGameCard(game, section) {
    let gameCard = document.createElement("div");

    let gameName = document.createElement("p");
    let gameTime = document.createElement("p");

    gameName.innerHTML = game.name;
    gameTime.innerHTML = getTimePlayed(game);

    gameCard.classList.add("game")
    gameCard.appendChild(gameName);
    gameCard.appendChild(gameTime);

    let parentElement = document.getElementById(section);
    parentElement.appendChild(gameCard);
}

function getTimePlayed(game) {
    return "Time Played: " + Math.floor(game.playtime / 60) + "hr " + game.playtime % 60 + "min";
}