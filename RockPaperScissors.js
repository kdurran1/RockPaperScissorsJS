function getComputerChoice(){
    num = Math.floor(Math.random() * 3)
    if (num == 0){
        return "rock"
    }
    if (num == 1){
        return "paper"
    }
    if (num == 2){
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            return "Draw"
        }
        if (computerSelection == "paper"){
            return "You Lose! Paper beats Rock"
        }
        if (computerSelection == "scissors"){
            return "You Win! Rock beats Scissor"
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "You Win! Paper beats Rock"
        }
        if (computerSelection == "paper"){
            return "Draw"
        }
        if (computerSelection == "scissors"){
            return "You Lose! Scissor beats Paper"
        }
    }
    else{
        if (computerSelection == "rock"){
            return "You Lose! Rock beats Scissor"
        }
        if (computerSelection == "paper"){
            return "You Win! Scissor beats Paper!"
        }
        if (computerSelection == "scissors"){
            return "Draw"
        }
    }
}

function game(){
    for (i = 0; i < 5; i++){
       let player = prompt("Pick Rock, Paper, or Scissors"); 
       player = player.toLowerCase()
       console.log(player)
       console.log(playRound(player, getComputerChoice()))
    }
}

game()