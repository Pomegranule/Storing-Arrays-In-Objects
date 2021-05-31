const yupButton = document.getElementById("yupButton").addEventListener("click", function(){
    
    let peepName = document.getElementById("namePlease").value;
    let peepDeal = document.getElementById("yourDeal").value;
    let peepColour = document.getElementById("yourColour").value;
    let peepDate = document.querySelector("#date").value;
    let peepFruit = document.querySelector("#fruitPicker").value;
    
    const newColDiv = document.createElement("div", {is: "col"});
    newColDiv.setAttribute("id", "ignDiv");
    newColDiv.innerHTML = ("<fieldset>IGN: <h5>" + peepName + ".</h5>" + "Their deal is:<h5>" + peepDeal + "</h5>" + " Their favourite colour is: <h5>" + peepColour + ".</h5>The fruit that was most appealing to them was: <h5>" + peepFruit + ".</h5> Created on: <h5>" + peepDate + "</h5></fieldset>");
    const randoDiv = document.getElementById("randoCol");
    randoDiv.append(newColDiv);

    storePeep();
});

// const userName = document.getElementById("namePlease").value;
// const userDeal = document.getElementById("yourDeal").value;
// const userColour = document.getElementById("yourColour").value;
// const userDate = document.querySelector("#date").value;
// const userFruit = document.querySelector("#fruitPicker").value;

function storePeep() {

    let peepName = document.getElementById("namePlease").value;
    let peepDeal = document.getElementById("yourDeal").value;
    let peepColour = document.getElementById("yourColour").value;
    let peepDate = document.querySelector("#date").value;
    let peepFruit = document.querySelector("#fruitPicker").value;

    localStorage.setItem("ourPeeps", JSON.stringify({
        "userName": peepName,
        "userDeal": peepDeal,
        "userColour": peepColour,
        "userDate": peepDate,
        "userFruit": peepFruit,
    }));
    console.log(localStorage);
}

const loadPeeps = document.getElementById("loadOtherPeeps").addEventListener("click", function(){
    let peeps = JSON.parse(localStorage.getItem("ourPeeps"));

    console.log(peeps);
})

