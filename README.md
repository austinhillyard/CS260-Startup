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

# HTML Deliverable
This deliverable includes the basic HTML structure of the website:
* **HTML pages** - Three html pages, Login, Tracker, and Import. Import is a mostly one time tool. Tracker is where most the functionality lies.
* **Links** - The Login page has links to the other pages for now. The buttons also redirect you to the tracker. The other two pages have simple links to the other pages.
* **Headers and Text** Most things are classified by headers with some small text here and there.
* **Selection Boxes** On the tracker pages there are two selection boxes. Filters and Sort. Filters is multiselect via the Alt or Shift key. Filters is also grouped, but sort is single select and no groups. This will filter and sort how the games are displayed in the main game view.
* **Images** The import tool has two picturs representing the specific settings and location to find the profile info needed to make the import tool work
* **Database** Database info is represented by several tables on the tracker page. I am sure these will be modified in the future once I figure out how to best represent the data. For now they are merely placeholders.
* **Websocket and Service Calls** How exactly websocket will work I am not sure. For now I am anticipating using Steam's and HowLongToBeat's API to populate data for my database, and this data can be updated via the refresh button is the plan

# CSS Deliverable
This deliverable includes the basic CSS of the website:
* **Color** - Background color and buttons and fields and text have been appropriately colored to be more sleek styled.
* **Formatting** - All of the elements have relational and dynamic formatting. Most of this has been achieved with a flex bin. The game views in the tracker page are down with a grid. The tiles are place holders for now. Eventually they will have functionality. Along with formatting was separating the areas of the website with background color, and in the game view horiztonal rules to help separate each of the grid boxes.
* **CSS and not bootstrap** Although bootstrap does look cool, for now I wished to style my website in CSS as a practice to get familiar with CSS and its rules and how it works. This was definitely achieved and took a lot of learning and trial and error on my part. Perhaps later down the line I will insert some bootstrap elements, likely a more sleek navbar.

# JavaScript Deliverable
This deliverable includes some basic JavaScript functionality of the website:
* **API** - The APIs I need to call will not work from the client side of the website, so they will need to be implemented on the server side
* **Data Display** - Data is parsed from a JSON string and dynamically displayed by last play time by default. As the API does not work, I used JSON data from my personal steam account after running the API manually.
* **Login Functionality** - When the user logs in or creates an account, a JSON object is made that has the username and password and the type of authentication it is, and then saved to localstorage for now. Of course in the future this where the login will happen.
* **Local Storage Data** - The import tool for now simply takes the default JSON data (my data), and then saves it to local storage. The game tracker page will then parse this data and display as mentioned.
    * However, to use the import tool to get the default data, you still need to provide a valid link. It simply needs to start with `https://steamcommunity.com/profiles/` and it should work.
* **Websocket and Database Functionality** - In the future, the import tool will have to communicate with the server and the server will have to run the API that gets that game data, and return it to the browser. The server database will also save the steam ID of the user so that the API can be quickly run in the future and update data. I also intend for the user to be able to mark games into either Priority or backlog categories, and those game ids will have to be saved to the database as well to allow for persistency.
* **Sorting And Filter Functionality** - This was started but not finished. I had to cut back on genres as that is not included in steam's API. They might be accessible via a different api for individual games, but I'll consider that a bonus feature if I can implement it.
* **How long left to play** - This data does not have an API, however it may be able to be webscraped, but I have not been able to implement that yet.

# Webservice Deliverable
This deliverable includes implementing the backend service:
* **HTTP Service** - A backend service has been implemented with node.js and the express module.
* **Static middleware** - The public files are served up automatically when no path is specified.
* **API** - The steam API is workable now from the backend, and this functionality should work for you personally if you follow the instructions. This 3rd party endpoint can only be called from the backend apparently. I tried calling it from the frontend but it will not work otherwise.
* **Frontend Endpoint calls** - Two frontend endpoint calls are made at the moment. 
    1. The first is when you input your steam URL it gets, your id and it saves it to the database just in an array for now. Future functionality will tie this to the user.
    1. The second is executed right after the id endpoint, and it gets the game data from the server after the server calls the steam API. This data is then saved to local storage and can be viewed in the tracker screen.
* **Backend Endpoints** - The above mentioned endpoints have backend counterparts as required.
