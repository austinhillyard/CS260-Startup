import React from 'react';
import "./import.css"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function Import() {




    
  return (
    <main className='container-fluid text-center'>
        <h3>Instructions</h3>
            <p>Enter the link to your steam profile below. You can find this on the app and website after clicking the Profile tab.</p>
            <img src="public/SteamProfileLink.png"/>
            <div id="form">
                <InputGroup className="inputgroup">
                    <InputGroup.Text id="profilelink">Profile Link</InputGroup.Text>
                    <Form.Control
                    id="input"
                    placeholder="https://steamcommunity.com/profiles/steam_number_id_here/"
                    aria-label="https://steamcommunity.com/profiles/steam_number_id_here/"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button variant="primary" id="import" type="button" onclick="importGames()">Import</Button>
            </div>
            <span><p>Make sure that your steam profile is public, and that your Game Details are public. If they are set to private game tracker cannot find your games and progress.</p></span>
            <img src="public/ProfilePublicSettings.png"/>
    </main>
  );
}