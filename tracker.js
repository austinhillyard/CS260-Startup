/*
Pseudo Code:

Import steam game data;
backup profile data to database, including profile link, Priority and backlog list 

Generate games as objects using a Class templates.
Import images for each game using steamdb or another database.
Insert game elements into the appropriate list based on last played and sorted by most recently played.

Click on a game and have it include a popup view that shows more details

Introduce sorting and filter options.

*/
const games = [];

class Game {
    constructor(gameJson) {
        this.name = gameJson.name;
        this.playtime = gameJson.playtime_forever;
        this.lastPlayed = gameJson.rtime_last_played;
    }
}

window.onload = function() {
    const gamesString = localStorage.getItem("games");
    if (gamesString != null) {
        loadGames(gamesString);
    }

    else {
        document.querySelector("#GameView").innerHTML = "No games detected for user. Please use the import tool";
    }
}

async function loadGames(gamesString) {
    let gamesJson = JSON.parse(gamesString);
    for (let game in gamesJson.response.games) {
        games.push(new Game(game));
    }
}

//Inserts the game element into the appropriate div 
function insertGameCard(game) {
    
}

//Refresh button that reruns the import functionality
function refreshData() {

}
