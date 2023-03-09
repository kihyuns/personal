const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_C = "hidden";
const userNKey = "username"
 


function onLoginSubmit(e){
    e.preventDefault() 
    loginForm.classList.add(HIDDEN_C)
    const username = loginInput.value;
    localStorage.setItem(userNKey, username)
    painGreetings();
}

function painGreetings() {
    const username = localStorage.getItem(userNKey)
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_C);
}

const savename = localStorage.getItem(userNKey);


if(savename === null){
    loginForm.classList.remove(HIDDEN_C);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    painGreetings()
}


function linkClick(e){
    e.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit)
//link.addEventListener("click", linkClick)

