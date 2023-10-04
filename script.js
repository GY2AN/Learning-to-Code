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

function reset(){
    randomNumberOne = Math.ceil(Math.random()*10);
    randomNumberTwo = Math.floor(Math.random()*10);

    firstInputValue.textContent = randomNumberOne;
    secondInputValue.textContent = randomNumberTwo;

    displayGameResult.textContent = "Enter the sum";
    displayGameResult.style.color = "blue";

    userInputValue.value = " ";
}