// 0 = rock 
// 1 = paper
// 2 = scissors
let container = document.querySelector(".button-container")
let win = 0
let loss = 0


container.addEventListener("click", getChoice)
document.getElementById("score").textContent = "Result:"

function getChoice(e){
    if(e.target.id == "paper"){
       if(playRound("paper")== "you win"){
        win =++win
        document.getElementById("win").textContent ="Wins: " + win
            }else if (playRound("paper")== "you lose"){
        loss = ++loss
        document.getElementById("loss").textContent = "loses: " + loss
       }
    }else if( e.target.id == "rock"){
        if(playRound("rock")== "you win"){
            win = ++win
            document.getElementById("win").textContent ="Wins: " + win
           }else if (playRound("rock")== "you lose"){
            loss = ++loss
            document.getElementById("loss").textContent = "loses: " + loss
           }
    }else if(e.target.id == "scissors"){
        if(playRound("scissors")== "you win"){
            win = ++win
            document.getElementById("win").textContent ="Wins: " + win
           }else if (playRound("scissors")== "you lose"){
            loss = ++loss
            document.getElementById("loss").textContent = "loses: " + loss
           }
    }
}




function getComputerChoice(){
    let computerChoice;
    let choice = Math.floor(Math.random()* 3);
    if (choice == 0){
        return computerChoice = "rock"
    } else if (choice == 1) {
        return computerChoice = "paper"
    } else {
        return computerChoice = "scissors"
    }
}

function playRound(choice){
    let playerChoice = choice
    let computerChoice = getComputerChoice()
    if (playerChoice.localeCompare(computerChoice) == 0){
        document.getElementById("score").textContent = "draw"
        return("draw")
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        
        document.getElementById("score").textContent = "You win, Rock Beats Scissors"
        return("you win")
    } else if (playerChoice == "rock" && computerChoice == "paper"){
        
        document.getElementById("score").textContent = "You lose, Paper Beats Rock"
        return("you lose")
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        
        document.getElementById("score").textContent = "You Win, Paper Beats Rock"
        return("you win")
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        
        document.getElementById("score").textContent = "You lose, Scissors Beat Paper"
        return("you lose")
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        
        document.getElementById("score").textContent = "You Win, Scissors Beats Paper"
        return("you win")
    } else if (playerChoice == "scissors" && computerChoice == "rock"){
        
        document.getElementById("score").textContent = "You lose, Rock Beats Scissors"
        return("you lose")
    }
}

