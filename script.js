let uniquePeepID = "ID_" + Math.random().toString(36).slice(2);

const yupButton = document.getElementById("yupButton").addEventListener("click", function(){
    
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
});

function storePeep() {

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
    // console.log(localStorage);
}

function peepCards(){  
    for (let loop = 0; loop < localStorage.length; loop++){

        let savedPeep = localStorage.getItem(localStorage.key(loop));
        let peepObj = JSON.parse(savedPeep);
        let {userName, userDeal, userColour, userDate, userFruit, ignID} = peepObj;

        const newColDiv = document.createElement("div", {is: "col"});
        newColDiv.setAttribute("id", "ignDiv");
        peepCard = newColDiv.innerHTML = (`<fieldset>IGN: <h5>${userName}.</h5> Their deal is: <h5>${userDeal}</h5> Their favourite colour is: <h5>${userColour}.</h5> The fruit that was most appealing to them was: <h5>${userFruit}.</h5> Created on: <h5>${userDate}</h5> ${ignID}</fieldset>`);
        
        const randoDiv = document.getElementById("randoCol");
        randoDiv.append(newColDiv);
        console.log(peepObj.ignID);
    }    
}

peepCards();

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