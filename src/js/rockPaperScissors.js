export default class RockPaperScissors {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.winningCombinations = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };
    this.validChoices = ["rock", "paper", "scissors"];
  }

  determineWinner() {
    if (this.players[0].choice === this.players[1].choice) {
      return "tie";
    } else if (this.winningCombinations[this.players[0].choice] === this.players[1].choice) {
      return this.players[0].name;
    } else {
      return this.players[1].name;
    }
  }
}