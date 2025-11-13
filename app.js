let playerScore;
let computerScore;

function playGame(){
    // reset scores
    playerScore = 0;
    computerScore = 0;
    let roundCounter = 1;
    let maxRounds = 5;

    // Play until the rounds are over, keep going if the scores are equal until there's a winner
    while(roundCounter <= maxRounds){
        alert(roundCounter == maxRounds ? "Final Round" : ("Round: " +roundCounter));
        playRound();
        roundCounter++;
    }
    alert("Game over! Result: " + (playerScore > computerScore ? "Player Wins" : (playerScore < computerScore) ? "Computer Wins" : "Draw"));
}

function playRound(){
    let input = prompt("Enter your choice (rock/paper/scissors): ").toLowerCase();

    while(input !== "rock" && input !== "paper" && input !== "scissors"){
        input = prompt("Invalid choice. Try again (enter rock/paper/scissors): ").toLowerCase();
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
    let computerChoice = getComputerChoice();
    alert("Player picks: " + playerChoice + "\nComputer picks: " + computerChoice);

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

    function updateResult(winner){
        if(winner === "draw"){
            alert("Draw" + "\n\nNew score:\n" + "Player: " + playerScore + "\nComputer: " + computerScore);
            return;
        }
        else if(winner === "computer"){
            computerScore++;
        }
        else if(winner === "player"){
            playerScore++;
        }
        else
            console.error("Invalid result!");

        alert("Round winner: " + winner + "\n\nNew score:\n" + "Player: " + playerScore + "\nComputer: " + computerScore);
    }
}