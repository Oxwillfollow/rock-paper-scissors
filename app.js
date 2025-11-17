let playerScore;
let computerScore;
let roundCounter = 1;
let maxScore = 5;

const newgameButton = document.getElementById("button-newgame");
const resultsDiv = document.getElementById("results");
const gameContentDiv = document.getElementById("game-content");

newgameButton.addEventListener("click", playGame);

function playGame(){
    // reset scores
    clearResults();
    clearGameContent();
    newgameButton.hidden = true;
    playerScore = 0;
    computerScore = 0;
    roundCounter = 1;
    maxScore = 5;

    const buttons = document.createElement("div");
    const buttonRock = document.createElement("button");
    const buttonPaper = document.createElement("button");
    const buttonScissors = document.createElement("button");

    buttonRock.textContent = "Rock";
    buttonPaper.textContent = "Paper";
    buttonScissors.textContent = "Scissors";
    buttonRock.id = "rock";
    buttonPaper.id = "paper";
    buttonScissors.id = "scissors";
    buttons.textContent = "Choose! "
    buttons.appendChild(buttonRock);
    buttons.appendChild(buttonPaper);
    buttons.appendChild(buttonScissors);
    gameContentDiv.appendChild(buttons);

    buttons.addEventListener("click", playRound);
}

function playRound(event){
    let input = "";

    if(event.target.id === "rock"){
        input = "rock";
    }
    else if(event.target.id === "paper"){
        input = "paper";
    }
    else if(event.target.id === "scissors"){
        input = "scissors";
    }
    else{
        alert("ERROR! Wrong input");
        return;
    }

    newRound(input);
}

function getComputerChoice(){
    let randomChoice = Math.floor((Math.random()*3)); // random between 0, 1 and 2

    switch(randomChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.error("Random choice was outside the bounds!");
            break;           
    }
}

function newRound(playerChoice){
    clearResults();
    const resultsPara = document.createElement("p");
    resultsDiv.appendChild(resultsPara);
    
    const roundText = document.createTextNode(`Round: ${roundCounter}\n`);
    resultsPara.appendChild(roundText);

    let computerChoice = getComputerChoice();
    const choicePara = document.createElement("p");
    choicePara.textContent = `[-- Player chooses: ${playerChoice} --] [-- Computer chooses: ${computerChoice} --]`;
    resultsDiv.appendChild(choicePara);

    if(computerChoice === playerChoice){
        updateResult("draw");
    }
    else if(computerChoice === "rock"){
        if(playerChoice === "scissors"){
            updateResult("computer");
        }
        else{
            updateResult("player");
        }
    }
    else if(computerChoice === "paper"){
        if(playerChoice === "rock"){
            updateResult("computer");
        }
        else{
            updateResult("player");
        }
    }
    else if(computerChoice === "scissors"){
        if(playerChoice === "rock"){
            updateResult("player");
        }
        else{
            updateResult("computer");
        }
    }
    else {
        console.error("Invalid choice!");
    }

    roundCounter++;
}

function updateResult(winner){
    const resultsPara = document.createElement("p");

    if(winner === "draw"){
        resultsPara.textContent = "Draw";
    }
    else if(winner === "computer"){
        computerScore++;
        resultsPara.textContent = "Computer wins";
    }
    else if(winner === "player"){
        playerScore++;
        resultsPara.textContent = "Player wins";
    }
    else
        console.error("Invalid result!");

    resultsPara.innerHTML += `<br/><br/>New Score:<br/>Player: ${playerScore}<br/>Computer: ${computerScore}`;
    resultsDiv.appendChild(resultsPara);

    if(playerScore >= maxScore || computerScore >= maxScore){
        const gameoverPara = document.createElement("p");
        resultsDiv.appendChild(gameoverPara);
        gameoverPara.textContent = `Game over! ${playerScore > computerScore ? "Player Wins!" : "Computer Wins!"}`;
        clearGameContent();
        newgameButton.hidden = false;
    }
}

function clearResults(){
    while (resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }
}

function clearGameContent(){
    while (gameContentDiv.firstChild) {
        gameContentDiv.removeChild(gameContentDiv.firstChild);
    }
}