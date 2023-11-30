function share() {
    oneWeekGames = JSON.parse(localStorage.getItem("oneWeekGames"));
    console.log(oneWeekGames);
    
    //addGames()

}

window.onload = function () {
    configureWebSocket();
}

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onclose = (event) => {
        //removeGames()
      };
}