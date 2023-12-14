import React, {useState} from 'react'
import "./import.css"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getOwnedGames } from './getOwnedGames';



//Set up 
export function Import() {

  const [inputValue, setInputValue] = useState('');
  let steamID;

  function handleClick() {
    console.log(inputValue);
    importGames();

  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
    
  return (
    <main className='container-fluid text-center'>
        <h3>Instructions</h3>
            <p>Enter the link to your Steam profile below. You can find this on the app and website after clicking the 'Profile' tab.</p>
            <img src="./SteamProfileLink.png"/>
            <div id="form">
                <InputGroup className="inputgroup">
                    <InputGroup.Text id="profilelink">Profile Link</InputGroup.Text>
                    <Form.Control
                    id="input"
                    placeholder="https://steamcommunity.com/profiles/steam_number_id_here/"
                    aria-label="https://steamcommunity.com/profiles/steam_number_id_here/"
                    aria-describedby="basic-addon1"
                    onChange={handleInputChange}
                    />
                </InputGroup>
                <Button variant="primary" id="import" type="button" onClick={handleClick}>Import</Button>
            </div>
            <span><p>Make sure that your steam profile is public, and that your Game Details are public. If they are set to private game tracker cannot find your games and progress.</p></span>
            <img src="./ProfilePublicSettings.png"/>
    </main>
  );


  async function importGames() {
    //Get steam ID from text box

    if(getSteamID()) {
      console.log("Saving ID to user");
      //Save that ID to the server and (once login functionality is a thing) tie it to the user.
      await saveIdToServer(steamID);
      console.log("Sending Request to server for games.");
      //Get games from Steam API, and save them to local storage.
      await getOwnedGames(steamID);
    }
    else {
      alert("Invalid Steam URL. Try again.");
   }

}

function getSteamID() {
    
    let steamURL = inputValue;
    if (steamURL.includes("https://steamcommunity.com/profiles/")) {
        steamURL = steamURL.replace("https://steamcommunity.com/profiles/", "").split("/");
        steamID = steamURL.at(0);
        let isnum = /^\d+$/.test(steamID);
        if (isnum) {
          localStorage.setItem("id", steamID);
          console.log("Steam id: " + steamID + ", Saved to local storage.");
          return true;
        }
    }
    return false;
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



}