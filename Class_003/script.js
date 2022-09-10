var secretNumber = parseInt(Math.random() * 11);

function Kick() {
    var kick = parseInt(document.getElementById("kickValue").value);
    console.log(kick);
    var elementoResultado = document.getElementById("result");

    if (kick == secretNumber) {
        elementoResultado.innerHTML = "You're Right !!";
        console.log("You're Right !!");
    } 
    else if (kick > 10 || kick < 0) {
        elementoResultado.innerHTML = "You must enter a number from 0 to 10";
        console.log("You must enter a number from 0 to 10");
    } 
    else {
        elementoResultado.innerHTML = "You're Missed !!";
        console.log("You're Missed !!");  
    }    
}