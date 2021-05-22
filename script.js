const userName = document.getElementById("namePlease");
const userDeal = document.getElementById("yourDeal");
const userColour = document.getElementById("yourColour");
const userDate = document.getElementById("date");
const userFruit = document.getElementById("fruitPicker");

let stringName = userName.toString;
let stringDeal = userDeal.toString;
let stringColour = userColour.toString;
let stringDate = userDate.toString;
let stringFruit = userFruit.toString;

// const userInputs = document.getElementsByClassName("userInput");

const userArray = [];

function yupButton(){
    userArray.push(stringName, stringDeal, stringColour, stringDate, stringFruit);
    document.getElementById("randoCol").innerHTML = userArray.join("<br>");
}

// const saveFile = {
//     userName: userArray,
// }

// function saveButton(saveFile){
//     function saveToLocalStorage() {
//         localStorage.setItem(saveFile.userName, userArray);
//     }
//     saveToLocalStorage();

//     function createElement(userName, userDeal, userColour, userDate, userFruit) {
//         const newColDiv = document.createElement("div", {is: "col"});
//         const newColP = document.createElement("p", {is: "contenteditable"});
//         const newColInfo = document.createTextNode("ID: " + userName + ".<br>" + "Their deal is:<br>" + userDeal + "<br>" + "Their favourite colour is: " + userColour + "The fruit that was most appealing to them was: " + userFruit + "<br>" + "Created on: " + userDate);
//         newColDiv.appendChild(newColP);
//         newColP.appendChild(newColInfo);
//         const randoDiv = document.getElementById("randoCol");
//         randoDiv.append(newColDiv);
//     }
//     createElement();
// }


