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

console.log(getComputerChoice(3))
