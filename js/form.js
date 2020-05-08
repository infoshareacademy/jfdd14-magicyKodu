const button = document.querySelector("#premiere__form__btn");
const input = document.querySelector("#premiere__form__input");

function validateEmail(email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
}

function showGameAfterEmail(event) {  
    event.preventDefault();
    let inputValue = input.value;
    let checkEmail = validateEmail(inputValue);
    if (inputValue == "" || checkEmail == false) {
        alert("Niepoprawny adres email!")
    } else {
        localStorage.setItem("email", inputValue);
        window.open("../Runner Game/game.html");
    } 
}

button.addEventListener("click", showGameAfterEmail);