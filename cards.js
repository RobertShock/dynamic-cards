console.log("In main.js");

// function myFunction() {
//     var x = document.getElementById("input").value;
//     // document.getElementById("demo").innerHTML = x;
//     createCard(x);
// }

let createButton = document.getElementById("createbtn");
let inputField = document.getElementById("input");
let deleteButton = document.getElementById("deletebtn");
let cardArea = document.getElementById("cardContainer");
var cardNumber = 0;

function createCard(){
    cardNumber++;
    var domString = "";
    	domString += `<div class="newCard" id="newCard${cardNumber}">`;
    	domString += `<h3>${inputField.value}</h3>`;
    	domString += `<button class="cardKiller" onclick="removeCard(${cardNumber})">Delete</button>`;
    	domString += `</div>`;
    addCardToDom(domString);
}



function addCardToDom(domString){
    cardArea.innerHTML += domString;
}

function removeCard(card){
    document.getElementById("newCard" + card).remove();
}

createButton.addEventListener('click', function(){
	createCard();
})

