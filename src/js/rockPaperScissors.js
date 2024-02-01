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
}