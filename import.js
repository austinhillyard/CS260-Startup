/* TODO
Import steam game data;
backup profile data to database, including profile link, Priority and backlog list 

Generate games as objects using a Class templates.

Steam api documentation. Requires key. Want to use the getOwnedGames api
https://developer.valvesoftware.com/wiki/Steam_Web_API#Game_interfaces_and_methods
*/

//Takes the input field and trims it to return the ID number of the user
function getSteamID() {
    let steamURL = document.querySelector("#profilelink").value;
    let steamURLString = steamURL.toString();
    let steamID = "";
    if (steamURLString.includes("https://steamcommunity.com/profiles/")) {
        steamID = steamURLString.replace("https://steamcommunity.com/profiles/", "");
        steamID = steamID.replace("/", "")
    }
    else {
        alert("Invalid Steam URL. Try again.");
    }

    console.log("Steam id: " + steamID);
    return steamID;
}

//TODO Saves steamID to 

//API call that gets the owned games and receives a JSON text.
function getOwnedGames(id) {

}

//Saves game data to local storage
function saveGameData(games) {
    
}

