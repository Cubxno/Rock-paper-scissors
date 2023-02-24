// 0 = rock 
// 1 = paper
// 2 = scissors

function getComputerChoice(max){
    let computerChoice;
    let choice = Math.floor(Math.random()* max);
    if (choice == 0){
        return computerChoice = "rock"
    } else if (choice == 1) {
        return computerChoice = "paper"
    } else {
        return computerChoice = "scissors"
    }
}

function getPlayerChoice(){
    let choice = prompt("Rock, Paper, Scissors")
    let playerChoice = choice.toLowerCase();
    return playerChoice
}

function playRound(){
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice(3)
    if (playerChoice.localeCompare(computerChoice) == 0){
        console.log("draw")
        console.log(computerChoice)
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        console.log("You win, Rock Beats Scissors")
        console.log(computerChoice)
    } else if (playerChoice == "rock" && computerChoice == "paper"){
        console.log("You lose, Paper Beats Rock")
        console.log(computerChoice)
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        console.log("You Win, Paper Beats Rock")
        console.log(computerChoice)
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose, Scissors Beats Paper")
        console.log(computerChoice)
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win, Scissors Beats Paper")
        console.log(computerChoice)
    } else if (playerChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose, Rock Beats Scissors")
        console.log(computerChoice)
    }
}

playRound()
