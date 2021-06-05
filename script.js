loadPeepCards();

let uniquePeepID = "ID_" + Math.random().toString(36).slice(2);

let yupButton = document.getElementById("yupButton").addEventListener("click", createPeepCard);

function createPeepCard(){
    
    let peepName = document.getElementById("namePlease").value;
    let peepDeal = document.getElementById("yourDeal").value;
    let peepColour = document.getElementById("yourColour").value;
    let peepDate = document.querySelector("#date").value;
    let peepFruit = document.querySelector("#fruitPicker").value;
    
    const newColDiv = document.createElement("div", {is: "col"});
    newColDiv.setAttribute("id", "ignDiv");
    
    newColDiv.innerHTML = (`<fieldset>IGN: <h5>${peepName}.</h5> Their deal is: <h5>${peepDeal}</h5> Their favourite colour is: <h5>${peepColour}.</h5> The fruit that was most appealing to them was: <h5>${peepFruit}.</h5> Created on: <h5>${peepDate}</h5> ${uniquePeepID}</fieldset>`);
    
    const randoDiv = document.getElementById("randoCol");
    randoDiv.append(newColDiv);

    storePeep();
}

function storePeep(){

    let peepName = document.getElementById("namePlease").value;
    let peepDeal = document.getElementById("yourDeal").value;
    let peepColour = document.getElementById("yourColour").value;
    let peepDate = document.querySelector("#date").value;
    let peepFruit = document.querySelector("#fruitPicker").value;    


    localStorage.setItem(uniquePeepID, JSON.stringify({
        "userName": peepName,
        "userDeal": peepDeal,
        "userColour": peepColour,
        "userDate": peepDate,
        "userFruit": peepFruit,
        "ignID": uniquePeepID,
    }));
}

function loadPeepCards(){  
    for (let loop = 0; loop < localStorage.length; loop++){

        let savedPeep = localStorage.getItem(localStorage.key(loop));
        let peepObj = JSON.parse(savedPeep);
        let {userName, userDeal, userColour, userDate, userFruit, ignID} = peepObj;

        const newColDiv = document.createElement("div", {is: "col"});
        newColDiv.setAttribute("id", "ignDiv");
        
        peepCard = newColDiv.innerHTML = (`<fieldset>
        
        <div class="col" id="buttons">
        <button class="manageTasks" type="button" id="editButton">E<img src=""></button>
        <button class="manageTasks"type="button" id="deleteButton">D<img src=""></button>
        <button class="manageTasks"type="button" id="saveButton">S<img src=""></button>
        </div><br>
        
        IGN: <h5>${userName}.</h5> Their deal is: <h5>${userDeal}</h5> Their favourite colour is: <h5>${userColour}.</h5> The fruit that was most appealing to them was: <h5>${userFruit}.</h5> Created on: <h5>${userDate}</h5> ${ignID}
        
        </fieldset>`);
        
        const randoDiv = document.getElementById("randoCol");
        randoDiv.append(newColDiv);
    }    
}
let ignDiv = document.getElementById("ignDiv");
ignDiv.addEventListener("click", selectAPeep);

function peepCardManagement(){
    
}

function selectAPeep(){
    let ignDiv = document.getElementById("ignDiv");
    let peepButtons = document.getElementById("buttons");

    if (peepButtons.style.display === "none"){
        peepButtons.style.display = "flex";
        ignDiv.style.color = ""
    }else{
        peepButtons.style.display = "none";
    }
}
// function peepID(){
//         let uniquePeepID = 0
        
//         if(ourPeeps.length == 0){
//             uniquePeepID = 1
//         } else {
//             let lastPeepID = ourPeeps[ourPeeps.length-1].uniquePeepID
//             uniquePeepID = lastPeepID + 1
//         }

//         return uniquePeepID;
//         // console.log(uniquePeepID);
//     }