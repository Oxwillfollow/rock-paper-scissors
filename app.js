// Function to start a new round
// Get a random computer choice
// Get player input
// Keep player and computer scores
// Display result

let playerScore = 0;
let computerScore = 0;

function PlayGame(){
    // reset scores
    playerScore = 0;
    computerScore = 0;
    let roundCounter = 1;
    let maxRounds = 5;

    // Play until the rounds are over, keep going if the scores are equal until there's a winner
    while(roundCounter <= maxRounds){
        alert(roundCounter == maxRounds ? "Final Round" : ("Round: " +roundCounter));
        PlayRound();
        roundCounter++;
    }
    alert("Game over! Winner: " + (playerScore > computerScore ? "Player" : (playerScore < computerScore) ? "Computer" : "Draw"));
}

function PlayRound(){
    let input = prompt("Enter your choice (rock/paper/scissors): ");

    input = input.toLowerCase();

    while(input !== "rock" && input !== "paper" && input !== "scissors"){
        input = prompt("Invalid choice. Try again (enter rock/paper/scissors): ");
        input = input.toLowerCase();
    }

    NewRound(input);
}

function GetComputerChoice(){
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

// takes two inputs, returns 1 if computer won, returns 2 if player2 won, returns 0 if draw
function NewRound(playerChoice){
    let computerChoice = GetComputerChoice();
    alert("Player picks: " + playerChoice + "\nComputer picks: " + computerChoice);

    if(computerChoice === playerChoice){
        UpdateResult("draw");
    }
    else if(computerChoice === "rock"){
        if(playerChoice === "scissors"){
            UpdateResult("computer");
        }
        else{
            UpdateResult("player");
        }
    }
    else if(computerChoice === "paper"){
        if(playerChoice === "rock"){
            UpdateResult("computer");
        }
        else{
            UpdateResult("player");
        }
    }
    else if(computerChoice === "scissors"){
        if(playerChoice === "rock"){
            UpdateResult("player");
        }
        else{
            UpdateResult("computer");
        }
    }
    else {
        console.error("Invalid choice!");
    }

    function UpdateResult(winner){
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