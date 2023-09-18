# CS260-Startup
Repository for the CS260 Startup Web project

## Elevator Pitch
I personally have a very hard time working through my backlog of video games. I like to bounce around between games too much. I have tried making lists but it's hard to see everything I have and how long it's been since I've played them. So GameTracker will do that for you. It will automatically pull your library of games from Steam, and display them all. After you play a game, just simply log how long you played it for, any notes if you want, and your session is recorded. All of your recently played games then show up according to how long it's been since you played them, and even shows you estimated time to complete each game. You can also put games in a backlog list that you want to play next, and queue up games in a "high priority" list as well, so you can easily plan out what you want to play, and what progress you are making.

## Key Features
* ### Library
    * Automatically pulls your library from steam, and allows manual entries as well to list your entire game collection.
    * If steam API allows it, import playtime automatically as well. Otherwise, must be done manually.
    * Allows manually entry of games on different platforms (Playstation, Xbox, Nintendo Switch).

* ### Time to beat
    * There is a video game database called HowLongToBeat that has the average time to complete a game. Data will be pulled from that website and then displayed with each title.
    * Playtime is compared with time to beat, and that resulting difference is displayed. 

* ### Time since played
    * Games are by default grouped by time since last played. This is to increase efficiency to continue playing recent and avoid context switching, AKA relearning the controls.
    * Time groupings of last played are:
        * Less than a week ago
        * Less than a month ago
        * Less than three months ago
        * Less than six months ago
        * More than six months ago
        * More than one year ago

* ### Game notes
    * Many systems have this feature, but include session notes for each play session, so the player can review any info they recorded when they return to the game, potentially after a long time.

* ### Sorting
    * Ability to sort by the following:
        * Genre
        * Playtime
        * Time to beat
        * Time left to beat
        * Alphabetically
        * Played
        * Unplayed
        * Completed
        * Platform
        * Backlog
        * High Priority

* ### Priority List
    * A list for games that the user deems a higher priority to play through currently. Always displayed no matter time since played.
    * Can include played and unplayed games, and completed games.
    * Can have different priority levels.

* ### Backlog
    * A list for games that user wishes to play next, once they get a chance to start playing another game.

* ### Friend Viewing
    * Can add other users as friends and see their currently played games, backlog, Games played 

## Description of Web Technologies used
* ### Authentication
    Simple login for each user to access their account.
* ### Database Data
    User's game library and progress is stored. This data is displayed to the user as described in the features section
* ### WebSocket Data
    Realtime data is retrieved from other databases (How long to beat), and the user's steam library.
    Friends' recently played games and backlog are visible as well and pulled from the database.

## Website Sketch
### Home Page
![Screenshot of Home page of GameTracker webpage.](<Screenshot 2023-09-18 213851.png>)
### Home Page with Menu bar
![Screenshot of Home page of GameTracker webpage with menu bar.](<Screenshot 2023-09-18 214247.png>)