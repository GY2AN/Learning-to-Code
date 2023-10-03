let gameRes = document.getElementById("gameResult");
let mathRandomOne,mathTwoRandom;

function reset(){
    mathRandomOne = Math.ceil(Math.random() * 10);
    mathTwoRandom = Math.floor(Math.random() * 50);
    let firstNumber = document.getElementById("firstNumber");
    firstNumber.textContent = mathRandomOne;
    let secondNumber = document.getElementById("secondNumber");
    secondNumber.textContent = mathTwoRandom;
    document.getElementById("userNum").value= "";
    gameRes.textContent = " Please Enter the Sum";
    gameRes.style.color = "orange";
}

function check(){
    let userInput = document.getElementById("userNum");
    let userInputValue = parseInt(userInput.value);
    let numMathRandomOne = parseInt(mathRandomOne);
    let numMathTwoRandom = parseInt(mathTwoRandom);
    let totalSum  = numMathRandomOne + numMathTwoRandom;
    //let a = Calc(userInputValue);
    

    if( totalSum === userInputValue){
        document.getElementById("gameResult").textContent = "You got it !!";
        document.getElementById("gameResult").style.color = "green";
    }else{
       gameRes.textContent = "Try again";
       gameRes.style.color = "red";
    }
}

mathRandomOne = Math.ceil(Math.random() * 10);
mathTwoRandom = Math.floor(Math.random() * 50);
let firstNumber = document.getElementById("firstNumber");
firstNumber.textContent = mathRandomOne;
let secondNumber = document.getElementById("secondNumber");
secondNumber.textContent = mathTwoRandom;
document.getElementById("userNum").value= "";
gameRes.textContent = " Please Enter the Sum";
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



