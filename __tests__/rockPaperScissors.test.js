import RockPaperScissors from '../src/js/rockPaperScissors.js';
import Player from '../src/js/player.js';

describe("RockPaperScissors", () => {
  let game;
  let player1;
  let player2;

  beforeEach(() => {
    player1 = new Player("Player1");
    player2 = new Player("Player2");
    game = new RockPaperScissors(player1, player2);
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

  describe("determineWinner", () => {
    test("should return 'Player1' if Player1's choice beats Player2's choice", () => {
      game.players[0].choice = "rock";
      game.players[1].choice = "scissors";
      expect(game.determineWinner()).toEqual(player1.name);
    });

    test("should return 'Player2' if Player2's choice beats Player1's choice", () => {
      game.players[0].choice = "rock";
      game.players[1].choice = "paper";
      expect(game.determineWinner()).toEqual(player2.name);
    });

    test("should return 'tie' if Player1's choice ties Player2's choice", () => {
      game.players[0].choice = "rock";
      game.players[1].choice = "rock";
      expect(game.determineWinner()).toEqual("tie");
    });
  });
});