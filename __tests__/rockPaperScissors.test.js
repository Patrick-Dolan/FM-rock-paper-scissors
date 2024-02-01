import RockPaperScissors from '../src/js/rockPaperScissors.js';

describe("RockPaperScissors", () => {
  let game;

  beforeEach(() => {
    game = new RockPaperScissors("Player1", "Player2");
  });

  test("should create a RockPaperScissors object with two players, a winning combos object, and a valid choices array", () => {
    expect(game.players.length).toEqual(2);
    expect(game.winningCombinations).toEqual({
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    });
    expect(game.validChoices).toEqual(["rock", "paper", "scissors"]);
  });
});