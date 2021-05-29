

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
    // localStorage.setItem("namePlease", userName);

    const userName = document.getElementById("namePlease").value;
    const userDeal = document.getElementById("yourDeal").value;
    const userColour = document.getElementById("yourColour").value;
    const userDate = document.querySelector("#date").value;
    const userFruit = document.querySelector("#fruitPicker").value;
    
    const newColDiv = document.createElement("div", {is: "col"});
    newColDiv.setAttribute("id", "ignDiv");
    newColDiv.innerHTML = ("<fieldset>IGN: <h5>" + userName + ".</h5>" + "Their deal is:<h5>" + userDeal + "</h5>" + " Their favourite colour is: <h5>" + userColour + ".</h5>The fruit that was most appealing to them was: <h5>" + userFruit + ".</h5> Created on: <h5>" + userDate + "</h5></fieldset>");
    const randoDiv = document.getElementById("randoCol");
    randoDiv.append(newColDiv);

    newIGN();
});



function newIGN(userName, userDeal, userColour, userDate, userFruit) {
    const userArray = [];
    
    userArray.push(userName, userDeal, userColour, userDate, userFruit);
    console.log(userArray);
}


