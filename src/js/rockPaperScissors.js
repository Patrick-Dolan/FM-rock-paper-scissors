export default class RockPaperScissors {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.winningCombinations = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };
    this.validChoices = ["rock", "paper", "scissors"];
    this.currentTurn = 0;
    this.roundWinner = null;
  }

  determineWinner() {
    if (!this.isValidChoice(this.players[0].choice) || !this.isValidChoice(this.players[1].choice)) {
      return "invalid choice";
    } else if (this.players[0].choice === this.players[1].choice) {
      this.roundWinner = "tie";
      return "tie";
    } else if (this.winningCombinations[this.players[0].choice] === this.players[1].choice) {
      this.roundWinner = this.players[0].name;
      return this.players[0].name;
    } else {
      this.roundWinner = this.players[1].name;
      return this.players[1].name;
    }
  }

  isValidChoice(choice) {
    return this.validChoices.includes(choice);
  }

  handlePlayerTurnChange() {
    this.currentTurn = this.currentTurn === 0 ? 1 : 0;
  }

  handleScoreUpdate() {
    if (this.roundWinner === "tie") { return; }
    this.players.find(player => player.name === this.roundWinner).updateScore();
  }
}