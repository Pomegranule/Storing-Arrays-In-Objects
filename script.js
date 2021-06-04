let uniquePeepID = "ID_" + Math.random().toString(36).slice(2);

const yupButton = document.getElementById("yupButton").addEventListener("click", function(){
    
    let peepName = document.getElementById("namePlease").value;
    let peepDeal = document.getElementById("yourDeal").value;
    let peepColour = document.getElementById("yourColour").value;
    let peepDate = document.querySelector("#date").value;
    let peepFruit = document.querySelector("#fruitPicker").value;
    
    const newColDiv = document.createElement("div", {is: "col"});
    newColDiv.setAttribute("id", "ignDiv");
    newColDiv.innerHTML = ("<fieldset>IGN: <h5>" + peepName + ".</h5>" + "Their deal is:<h5>" + peepDeal + "</h5>" + " Their favourite colour is: <h5>" + peepColour + ".</h5>The fruit that was most appealing to them was: <h5>" + peepFruit + ".</h5> Created on: <h5>" + peepDate + "</h5>" + uniquePeepID + "</fieldset>");
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
    // peeps = localStorage.getItem(uniquePeepID);
    for (let loop = 0; loop < localStorage.length; loop++){
        
        let savedPeep = localStorage.getItem(localStorage.key(JSON.parse(loop)));

        // const newColDiv = document.createElement("div", {is: "col"});
        // newColDiv.setAttribute("id", "ignDiv");
        // peepCard = newColDiv.innerHTML = ("<fieldset>IGN: <h5>" + peepName + ".</h5>" + "Their deal is:<h5>" + peepDeal + "</h5>" + " Their favourite colour is: <h5>" + peepColour + ".</h5>The fruit that was most appealing to them was: <h5>" + peepFruit + ".</h5> Created on: <h5>" + peepDate + "</h5></fieldset>");
        console.log(savedPeep);
    }
    
    // localStorage.getItem(localStorage.key());
    // console.log(savedPeep);
    // peepName = localStorage.getItem("userName");
    // peepDeal = localStorage.getItem("userDeal");
    // peepColour = localStorage.getItem("userColour");
    // peepDate = localStorage.getItem("userDate");
    // peepFruit = localStorage.getItem("userFruit");
    // uniquePeepID = localStorage.getItem("ignID");

    

    // for (let peeps=0; peepCard <= peeps.length; peepCard++){
    //     const randoDiv = document.getElementById("randoCol");
    //     randoDiv.append(newColDiv);
    // }

    
}

const loadPeeps = document.getElementById("loadOtherPeeps").addEventListener("click", function(){
    // let peeps = JSON.parse(localStorage.getItem({}, uniquePeepID));
    // //uniquePeepID is not defined. You cannot redefine it here because then you will get a different unique ID. Instead, you should reference a click event listener, that tracks which peep you have selected, and then gives you the uniquePeepID of the selected peep. Wait, that doesn't work for this because this whole function is to make the peeps load. How can you click on a peep that hasn't loaded on the page, yet?

    // console.log(peeps);

    peepCards();

    // const newColDiv = document.createElement("div", {is: "col"});
    // newColDiv.setAttribute("id", "ignDiv");
    // peepCard = newColDiv.innerHTML = ("<fieldset>IGN: <h5>" + peepName + ".</h5>" + "Their deal is:<h5>" + peepDeal + "</h5>" + " Their favourite colour is: <h5>" + peepColour + ".</h5>The fruit that was most appealing to them was: <h5>" + peepFruit + ".</h5> Created on: <h5>" + peepDate + "</h5></fieldset>");
})

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