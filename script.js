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
        return("draw")
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        
        console.log("You win, Rock Beats Scissors")
        return("you win")
    } else if (playerChoice == "rock" && computerChoice == "paper"){
        
        console.log("You lose, Paper Beats Rock")
        return("you lose")
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        
        console.log("You Win, Paper Beats Rock")
        return("you win")
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        
        console.log("You lose, Scissors Beats Paper")
        return("you lose")
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        
        console.log("You Win, Scissors Beats Paper")
        return("you win")
    } else if (playerChoice == "scissors" && computerChoice == "rock"){
        
        console.log("You lose, Rock Beats Scissors")
        return("you lose")
    }
}

function game(){
    let computerWin = 0
    let playerWin = 0
    let draw = 0
    for (i=0; i<5; i++){
        let round = playRound()
       if (round.localeCompare('draw') == 0){
        draw = draw + 1 
        console.log("draw: " + draw )
        console.log('win: ' + playerWin)
        console.log('lose: ' + computerWin)
       } else if (round.localeCompare("you win") == 0){
        playerWin = playerWin + 1
        console.log("draw: " + draw )
        console.log('win: ' + playerWin)
        console.log('lose: ' + computerWin)
       } else {
        computerWin = computerWin + 1
        console.log("draw: " + draw )
        console.log('win: ' + playerWin)
        console.log('lose: ' + computerWin)
       }
    } if (computerWin > playerWin){
        console.log("you lose!!!")
    } else if (computerWin < playerWin){
        console.log('you win!!!')
    } else {
        console.log("you draw!")
    }
}

game()