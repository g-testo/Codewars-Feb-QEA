// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/java

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

class RockPaperScissors{
    public static void main(String[] args) {
        System.out.println(rps("scissors", "paper"));
        
    }
    public static String rps(String p1, String p2) {
        if(p1.equals(p2)){
            return "Draw!";
        } else if((p1.equals("paper") && p2.equals("rock")) || (p1.equals("rock") && p2.equals("scissors")) || (p1.equals("scissors") && p2.equals("paper")) ){ // paper, rock// rock, scissors// scissors, paper
            return "Player 1 wins";
        } else {
            return "Player 2 wins";
        }
    }
}