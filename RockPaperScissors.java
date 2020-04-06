// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/java

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

class RockPaperScissors{
    public static void main(String[] args) {
        rps("rock", "paper");
        
    }
    public static String rps(String p1, String p2) {
        

        return "Player 1 wins";
    }
}