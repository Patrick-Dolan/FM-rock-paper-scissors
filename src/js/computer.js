export default class Computer {
  constructor() {
    this.name = "Computer";
    this.score = 0;
    this.choice = null;
  }

  makeChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    this.choice = choices[randomIndex];
  }

  updateScore() {
    this.score++;
  }
}