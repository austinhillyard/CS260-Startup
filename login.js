//TODO: make login functions actually communicate with server.

function login() {
    localStorage.setItem("authenticationToken", authenticationToken());
}

function createAccount() {
    localStorage.setItem("newAccountToken", authenticationToken());
}

//Get the data from the username and password field and return it as an object.
function authenticationToken() {
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const token = { username:username.value, password:password.value };
    return token;
}