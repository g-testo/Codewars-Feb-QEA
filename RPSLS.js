// https://www.codewars.com/kata/57d29ccda56edb4187000052/train/javascript

// Rock-Paper-Scissors Big Bang Style

// According to Sheldon Cooper the following is true:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// (and as it always has) Rock crushes Scissors

// Given two random values from the above game, return the Player result as: Player 1 Won!, Player 2 Won! or Draw!
// Only valid lower case values will be given from these possible values:
// rock, spock, paper, lizard, scissors


function rpsls(p1,p2){
    if(p1===p2){
        return "Draw!";
    } else if(
        (p1 === "rock" && (p2 === "lizard" || p2 === "scissors")) || 
        (p1 === "paper" && (p2 === "rock" || p2=== "spock")) || 
        (p1 === "scissors" && (p2 === "paper" || p2 === "lizard")) ||
        (p1 === "lizard" && (p2 === "paper" || p2 === "spock")) ||
        (p1 === "spock" && (p2 === "rock" || p2 === "scissors"))
    ){
        return "Player 1 won!"
    } else {
        return "Player 2 won!"
    }
}