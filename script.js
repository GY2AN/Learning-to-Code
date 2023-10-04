let firstInputValue = document.getElementById("firstNumber");
let secondInputValue = document.getElementById("secondNumber");
let userInputValue = document.getElementById("userNum");
let displayGameResult = document.getElementById("gameResult");

let randomNumberOne;
let randomNumberTwo;

randomNumberOne = Math.ceil(Math.random()*10);
randomNumberTwo = Math.floor(Math.random()*10);

firstInputValue.textContent = randomNumberOne;
secondInputValue.textContent = randomNumberTwo;

displayGameResult.textContent = "Enter the sum";
displayGameResult.style.color = "blue";

userInputValue.value = " ";

<<<<<<< HEAD
=======
function reset(){
    mathRandomOne = Math.ceil(Math.random() * 10);
    mathTwoRandom = Math.floor(Math.random() * 50);
    let firstNumber = document.getElementById("firstNumber");
    firstNumber.textContent = mathRandomOne;
    let secondNumber = document.getElementById("secondNumber");
    secondNumber.textContent = mathTwoRandom;
    document.getElementById("userNum").value= "";
    gameRes.textContent = "Enter the Sum";
    gameRes.style.color = "orange";
}
>>>>>>> 2ebd95ca56bf21568a4e26c9af0a97315597fae4

function check(){
    let randomNumberOneValue = parseInt(randomNumberOne);
    let randomNumberTwoValue = parseInt(randomNumberTwo);
    let userInputVal = parseInt(userInputValue.value);

    let totalSum = randomNumberOneValue + randomNumberTwoValue;

    if(totalSum === userInputVal){
        displayGameResult.textContent = "You got it!!";
        displayGameResult.style.color = "green";
    }else{
        displayGameResult.textContent = "Try again!!!";
        displayGameResult.style.color = "red";
    }
}

<<<<<<< HEAD
function reset(){
    randomNumberOne = Math.ceil(Math.random()*10);
    randomNumberTwo = Math.floor(Math.random()*10);
=======
mathRandomOne = Math.ceil(Math.random() * 10);
mathTwoRandom = Math.floor(Math.random() * 50);
let firstNumber = document.getElementById("firstNumber");
firstNumber.textContent = mathRandomOne;
let secondNumber = document.getElementById("secondNumber");
secondNumber.textContent = mathTwoRandom;
document.getElementById("userNum").value= "";
gameRes.textContent = "Enter the Sum";
gameRes.style.color = "orange";

/*function check(){

    if(totalSum === userInputValue){
        document.getElementById("gameResult").textContent = "That's correct!!!";
        document.getElementById("gameResult").style.color = "green";
    }else{
       gameRes.textContent = "Try again!!!";
       gameRes.style.color = "red";
    }
}*/
>>>>>>> 2ebd95ca56bf21568a4e26c9af0a97315597fae4

    firstInputValue.textContent = randomNumberOne;
    secondInputValue.textContent = randomNumberTwo;

    displayGameResult.textContent = "Enter the sum";
    displayGameResult.style.color = "blue";

    userInputValue.value = " ";
}