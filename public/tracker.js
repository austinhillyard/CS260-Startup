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

//Values holding the current filter and sort
let filters = ["no-filter"];
let sorting = "playtimeDown";
let separateGameView = true;

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

//Loads the page with games, or a message saying to use the import tool.
window.onload = function() {
    const gamesString = localStorage.getItem("games");
    const idString = localStorage.getItem("id");
    if (gamesString != null) {
        filterListener();
        sortListener();
        checkListener();
        loadGames(gamesString);
    }
    else if (idString != null) {
        refreshData();
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
    //Insert one week games into localstorage for sharer functionality
    localStorage.setItem("oneWeekGames", JSON.stringify(oneWeekGames));
}

function insertGames() {
    
    insertGameList(oneWeekGames, "lessThanWeek");
    insertGameList(oneMonthGames, "lessThan1Month");
    insertGameList(threeMonthGames, "lessThan3Months");
    insertGameList(sixMonthGames, "lessThan6Months");
    insertGameList(oneYearGames, "lessThanYear");
    insertGameList(moreThanYearGames, "moreThanYear");
    insertGameList(neverPlayed, "neverPlayed");
    
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
    let gameLastPlayed = document.createElement("p");

    gameName.innerHTML = game.name;
    gameTime.innerHTML = game.getTimePlayed();
    gameLastPlayed.innerHTML = game.getLastPlayed()

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

//Filter function listener

function filterListener() {
    const filterElement = document.getElementById("filter");
    filterElement.addEventListener("input", function() {
        
        //Get Selected values
        const selections = getFilterValues(filterElement);
        filters = selections;
        console.log(selections);
        applyView();

    });
}

//Returns all the selected values of the filter.
function getFilterValues(filterElement) {
    let selections = [];
    let options = filterElement && filterElement.options;
    let opt;

    for (let i = 0, iLen=options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
            selections.push(opt.value || opt.text);
        }
    }

    return selections;
}

//Sort function listener

function sortListener() {
    const sortElement = document.getElementById("sort");
    sortElement.addEventListener("change", function () {
        const selectionOption = sortElement.options[sortElement.selectedIndex];
        const selectionValue = selectionOption.value;
        sorting = selectionValue;
        console.log("Selected sort option: " + selectionValue);
        applyView();
    });
}

function checkListener() {
    const checkElement = document.getElementById("gameViewCheck");
    checkElement.addEventListener("change", function() {
        separateGameView = checkElement.checked;
        console.log(separateGameView);
        applyView();
    });
}

//Function that rebuilds the view to any current filters and sort
async function applyView(newFilters=filters, newSorting=sorting, gameViewOn=separateGameView) {
    clearDisplay();
    if (gameViewOn) {

    }
    else {
        const gameView = document.getElementById("GameView");
        const gameTimeView = document.createElement("div");
        gameTimeView.classList.add("gameTimeView");
        gameTimeView.id = "allGameView";
        gameView.appendChild(gameTimeView);

        //Change this line later
        insertGameList(games, "allGameView");
    }
    

}

function clearDisplay() {
    document.getElementById("GameView").replaceChildren();
}

//Check database for ID and automatically run 3rd party API
async function loginRefresh() {
    try {
        const response = await fetch('/login', {
            method: "GET",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({username: localStorage.getItem("username")})
        })
        console.log(response);
        localStorage.setItem("id", response.body.id);
        console.log("Id in localstorage: " + localStorage.getItem("id"));
        console.log("Getting games from steam...");
        await getOwnedGames(localStorage.getItem("id"));
        
    }
    catch (err) {
        console.log("Error encounterd: ", err);
        console.log("Unable to find ID for user from server");
    }
}

//Refresh button that reruns the import functionality
async function refreshData() {
    await getOwnedGames(localStorage.getItem("id"));
    location.reload();
}

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('games');
    localStorage.removeItem('id');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }