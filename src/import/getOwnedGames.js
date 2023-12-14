export async function getOwnedGames(id) {
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
export function saveGameData(games) {
    localStorage.setItem("games", JSON.stringify(games));
    alert("Games saved to local storage");
}