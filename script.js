// const userName = document.getElementById("namePlease");
// const userDeal = document.getElementById("yourDeal");
// const userColour = document.getElementById("yourColour");
// const userDate = document.getElementById("date");
// const userFruit = document.getElementById("fruitPicker");

// const userInputs = document.getElementsByClassName("userInput");

// const userArray = [];

// function yupButton(){
//     userArray;
//     userArray.push(userName, userDeal, userColour, userDate, userFruit);

// }

// const saveFile = {
//     userName: userArray,
// }
const yupButton = document.getElementById("yupButton").addEventListener("click", function(){
    // function saveToLocalStorage() {
    //     localStorage.setItem(saveFile.userName, userArray);
    // }
    // saveToLocalStorage();

    const userName = document.getElementById("namePlease").value;
    const userDeal = document.getElementById("yourDeal").value;
    const userColour = document.getElementById("yourColour").value;
    const userDate = document.getElementById("date").value;
    // const userFruit = document.getElementById("fruitPicker").value;
    
    localStorage.setItem("namePlease", userName);

    console.log(userName);

    const newColDiv = document.createElement("div", {is: "col"});
    const newColP = document.createElement("p", {is: "contenteditable"});
    const newColInfo = document.createTextNode("IGN: " + userName + ".<br>" + "Their deal is:<br>" + userDeal + "<br>" + " Their favourite colour is: " + userColour + ". The fruit that was most appealing to them was: " +  "<br>" + " Created on: " + userDate);
    newColDiv.appendChild(newColP);
    newColP.appendChild(newColInfo);
    const randoDiv = document.getElementById("randoCol");
    randoDiv.append(newColDiv);
});


