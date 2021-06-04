let yupButton = document.getElementById("yupButton").addEventListener("click");

function makePeepCardObject(){

    let peepName = document.getElementById("namePlease").value;
    let peepDeal = document.getElementById("yourDeal").value;
    let peepColour = document.getElementById("yourColour").value;
    let peepDate = document.querySelector("#date").value;
    let peepFruit = document.querySelector("#fruitPicker").value;
    let uniquePeepID = "ID_" + Math.random().toString(36).slice(2);

    let peepCard = {
        "userName": peepName,
        "userDeal": peepDeal,
        "userColour": peepColour,
        "userDate": peepDate,
        "userFruit": peepFruit,
        "ignID": uniquePeepID,
    }
    localStorage.setItem(uniquePeepID, JSON.stringify({peepCard}));
    console.log(localStorage);
}

function yupButtonClick(){
    let peepCard = makePeepCardObject().peepCard;
    
    const newColDiv = document.createElement("div", {is: "col"});
    newColDiv.setAttribute("id", "ignDiv");
    newColDiv.innerHTML = ("<fieldset>IGN: <h5>" + peepName + ".</h5>" + "Their deal is:<h5>" + peepDeal + "</h5>" + " Their favourite colour is: <h5>" + peepColour + ".</h5>The fruit that was most appealing to them was: <h5>" + peepFruit + ".</h5> Created on: <h5>" + peepDate + "</h5></fieldset>");
    const randoDiv = document.getElementById("randoCol");
    randoDiv.append(newColDiv);
}




// function peepCards(){  
//     peeps = localStorage.getItem(peepCard);
    
    // let peepCard= {
    //     "userName": peepName,
    //     "userDeal": peepDeal,
    //     "userColour": peepColour,
    //     "userDate": peepDate,
    //     "userFruit": peepFruit,
    //     "ignID": uniquePeepID,
    // }

    // for (let peeps=0; peeps <= peeps.length; peepCard++){
    //     console.log(peeps);
    //     let peepCard= newColDiv.innerHTML = ("<fieldset>IGN: <h5>" + this.peepName + ".</h5>" + "Their deal is:<h5>" + peepDeal + "</h5>" + " Their favourite colour is: <h5>" + peepColour + ".</h5>The fruit that was most appealing to them was: <h5>" + peepFruit + ".</h5> Created on: <h5>" + peepDate + "</h5></fieldset>");
    //     const randoDiv = document.getElementById("randoCol");
    //     randoDiv.append(newColDiv);
    // }
//     console.log(Storage.peepCard);
    
// }

// const loadPeeps = document.getElementById("loadOtherPeeps").addEventListener("click", function(){
//     peepCards();
// });