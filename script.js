function getComputerChoice(){
    //generates random value
    const choice =['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}
function getHumanChoice() {
    //accept input from user
    let userInput = prompt("Please enter rock, paper or scissors: ")
    while(userInput != 'rock' && userInput != 'paper' && userInput != 'scissors'){
        userInput = prompt("Invalid input.Please enter rock, paper or scissors: ").toLowerCase();
    }
    return userInput;
}
function checkWinner(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        return "It's a tie";
    }
    else if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock')){
        return "Human wins";
    }
    else{
        return "Computer wins";
    }
}
function playRound(){
    //tells the players the winner of that round
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    let winner = checkWinner(humanChoice, computerChoice);
    console.log(winner);
}

function playGame() {
    //plays 5 rounds and keeps track of scores
    let humanScore = 0;
    let computerScore = 0;
    let numberOfRounds = 1;
    while(numberOfRounds <= 5){
        console.log(`\nRound ${numberOfRounds}:`);
        let winner = playRound();
        
        if (winner === "Human") {
            humanScore++;
        } else {
            computerScore++;
        }
        
        console.log(`Score - User: ${humanScore}, Computer: ${computerScore}`);
        numberOfRounds++;
    }
}
playGame();