export default class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.choice = null;
  }

  makeChoice(choice) {
    this.choice = choice;
  }

  updateScore() {
    this.score++;
  }
}