/* TODO
Import steam game data;
backup profile data to database, including profile link, Priority and backlog list 

Generate games as objects using a Class templates.

Steam api documentation. Requires key. Want to use the getOwnedGames api
https://developer.valvesoftware.com/wiki/Steam_Web_API#Game_interfaces_and_methods
*/

//Takes the input field and trims it to return the ID number of the user
let steamID = "";

async function importGames() {
    //Get steam ID from text box
    getSteamID();
    console.log("Saving ID to user");
    //Save that ID to the server and (once login functionality is a thing) tie it to the user.
    await saveIdToServer(steamID);
    console.log("Sending Request to server for games.");
    //Get games from Steam API, and save them to local storage.
    await getOwnedGames(steamID);

}

function getSteamID() {
    let steamURL = document.querySelector("#profilelink").value.toString();
    if (steamURL.includes("https://steamcommunity.com/profiles/")) {
        steamID = steamURL.replace("https://steamcommunity.com/profiles/", "").replace("/", "");
    }
    else {
        alert("Invalid Steam URL. Try again.");
    }

    localStorage.setItem("id", steamID);
    console.log("Steam id: " + steamID + ", Saved to local storage.");
}

async function saveIdToServer(id) {
    try {
        const response = await fetch('/api/id', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({steamId: id, username: localStorage.getItem("username")})
        })

        console.log(response);
    }
    catch (err) {
        console.log("Error encounterd: ", err);
        console.log("Unable to save ID to server");
    }
}

async function getOwnedGames(id) {
    try {
        //Send request with ID
        let apiCall = '/api/import/' + id;
        const response = await fetch(apiCall);

        let games = await response.json().catch(err => console.log('Problem with .json() call:', err));
        // This will provide specific error messages for issues with the .json() call. 
        console.log("Got games!");
        console.log(games);
        //Save games to local storage.
        saveGameData(games);
    }
    catch (err) {
        console.log(`Error encountered: ${err}`)
        console.log("Unable to get games.");
    }
}


//Saves game data to local storage
function saveGameData(games) {
    localStorage.setItem("games", JSON.stringify(games));
    alert("Games saved to local storage");
}


