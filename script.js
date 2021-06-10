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
    newColDiv.setAttribute("class", "ignDiv");
    
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

//Yay!! A finished and fully functional function! This is the function that will load all of the peeps that were previously created using the form and then saved to localStorage.

//loadPeepCards() loops through every entry that was saved to the user's local storage and recreates a card for every single one of those entries. It then appends that entry to randoCol, an empty col div near the bottom of your HTML.

//Maybe add something that limits the amount of cards that can be shown on screen at once, and allows a scroll bar to appear.
function loadPeepCards(){  
    for (let loop = 0; loop < localStorage.length; loop++){

        let savedPeep = localStorage.getItem(localStorage.key(loop));
        let peepObj = JSON.parse(savedPeep);
        let {userName, userDeal, userColour, userDate, userFruit, ignID} = peepObj;

        const newColDiv = document.createElement("div", {is: "col"});
        newColDiv.setAttribute("class", "ignDiv");
        newColDiv.setAttribute("id", "ignDiv");
        
        peepCard = newColDiv.innerHTML = (`<fieldset>
        
        <div class="col manageButtons" id="buttons">
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

//This is the start of an event listener that will detect which peep entry you have clicked on.
let ignDiv = document.getElementById("ignDiv")
ignDiv.addEventListener("click", selectAPeep);

//Whoops, you didn't finish this one...
function peepCardManagement(){
    //To be continued...
    //Also, please add the edit, save and delete functions, here.
}

//selectAPeep() is the function that is called when a peepCard is clicked on. This function causes the edit, save and delete buttons to appear on the selected card as well as changes the background color of that card so that the user knows which one has been selected.

//1st issue: you can't have multiple elements with the same ID! Please declare these elements using a classname instead.

//2nd issue: okay, that broke everything. Still figuring out why. Maybe use a while loop or something? Okay, declaring things by their classname will return multiple elements. You would need to loop through each one, but that didn't work for some reason. 

//3rd issue: have only just realised that edit, save and delete buttons will not show up on any other card except the top one. Why? Please figure this out. This might also fix some of the other issues.

//4th issue: please go and change the IDs and classnames in the peepCards that are recreated upon load. The first one will be fine, but any subsequent cards will not be selected because they will have the same ID. Give them a classname and make sure that the classname is also changed in the CSS so that the style is kept.
function selectAPeep(){
    let ignDiv = document.getElementById("ignDiv");
    let peepButtons = document.getElementById("buttons");

    if (peepButtons.style.display === "none"){
        peepButtons.style.display = "flex";
        ignDiv.style.backgroundColor = "#54a8c2"
    }else{
        peepButtons.style.display = "none";
        ignDiv.style.backgroundColor = "#03838f"
    }
}