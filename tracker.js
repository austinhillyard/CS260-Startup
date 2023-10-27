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

const now = Date.now();

//Arrays of total games, and games sorted by last play time
const games = [];
const oneWeekGames = [];
const oneMonthGames = [];
const threeMonthGames = [];
const sixMonthGames = [];
const oneYearGames = [];
const moreThanYearGames = [];
const neverPlayed = [];

//Class object that games are converted to from JSON string.
class Game {
    constructor(gameJson) {
        this.name = gameJson.name;
        this.playtime = gameJson.playtime_forever;
        this.lastPlayed = this.getTimeFrame(gameJson.rtime_last_played);
        this.gameID = gameJson.appid;
        this.epochTime = gameJson.rtime_last_played;
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
}

//Loads the page with games, or a message saying to use the import tool.
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
    for (let game of gamesJson.response.games) {
        games.push(new Game(game));
    }
    putGamesInTimeSlots(games);
    insertGames();

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
}

function insertGames() {
    for (let game of oneWeekGames) {
        insertGameCard(game, "lessThanWeek");
    }
    for (let game of oneMonthGames) {
        insertGameCard(game, "lessThan1Month");
    }
    for (let game of threeMonthGames) {
        insertGameCard(game, "lessThan3Months");
    }
    for (let game of sixMonthGames) {
        insertGameCard(game, "lessThan6Months");
    }
    for (let game of oneYearGames) {
        insertGameCard(game, "lessThanYear");
    }
    for (let game of moreThanYearGames) {
        insertGameCard(game, "moreThanYear");
    }
    for (let game of neverPlayed) {
        insertGameCard(game, "neverPlayed");
    }
}

//Inserts the game element into the appropriate div 
function insertGameCard(game, section) {
    let gameCard = document.createElement("div");

    let gameName = document.createElement("p");
    let gameTime = document.createElement("p");
    let gameLastPlayed = document.createElement("p");

    gameName.innerHTML = game.name;
    gameTime.innerHTML = "Time Played: " + Math.floor(game.playtime / 60) + "hr " + game.playtime % 60 + "min";
    if (game.lastPlayed === "Never Played") {
        gameLastPlayed.innerHTML = "Never Played";
    }
    else {
        gameLastPlayed.innerHTML = "Last Played: " + game.lastPlayed.toDateString();
    }

    gameCard.classList.add("game")
    gameCard.appendChild(gameName);
    gameCard.appendChild(gameTime);
    gameCard.appendChild(gameLastPlayed);

    let parentElement = document.getElementById(section);
    parentElement.appendChild(gameCard);
}

//Grab Image from steamGridDB
//This might have to be done from the Server side. Or I have the key public.
function steamGridImage(gameID) {

}

//Refresh button that reruns the import functionality
function refreshData() {

}
