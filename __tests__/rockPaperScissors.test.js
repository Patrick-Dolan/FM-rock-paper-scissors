import RockPaperScissors from '../src/js/rockPaperScissors.js';
import Player from '../src/js/player.js';

describe("RockPaperScissors", () => {
  let rockPaperScissors;
  let player1;
  let player2;

  beforeEach(() => {
    player1 = new Player("Player1");
    player2 = new Player("Player2");
    rockPaperScissors = new RockPaperScissors(player1, player2);
  });

  test("should create a RockPaperScissors object with two players, a winning combos object, and a valid choices array", () => {
    expect(rockPaperScissors.players.length).toEqual(2);
    expect(rockPaperScissors.winningCombinations).toEqual({
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    });
    expect(rockPaperScissors.validChoices).toEqual(["rock", "paper", "scissors"]);
  });

  describe("isValidChoice", () => {
    test("should return true if the choice is valid", () => {
      expect(rockPaperScissors.isValidChoice("rock")).toEqual(true);
    });

    test("should return false if the choice is invalid", () => {
      expect(rockPaperScissors.isValidChoice(null)).toEqual(false);
    });
  });

  describe("determineWinner", () => {
    test("should return 'Player1' if Player1's choice beats Player2's choice", () => {
      rockPaperScissors.players[0].choice = "rock";
      rockPaperScissors.players[1].choice = "scissors";
      expect(rockPaperScissors.determineWinner()).toEqual(player1.name);
    });

    test("should return 'Player2' if Player2's choice beats Player1's choice", () => {
      rockPaperScissors.players[0].choice = "rock";
      rockPaperScissors.players[1].choice = "paper";
      expect(rockPaperScissors.determineWinner()).toEqual(player2.name);
    });

    test("should return 'tie' if Player1's choice ties Player2's choice", () => {
      rockPaperScissors.players[0].choice = "rock";
      rockPaperScissors.players[1].choice = "rock";
      expect(rockPaperScissors.determineWinner()).toEqual("tie");
    });

    test("should return 'invalid choice' if player2's choice is invalid", () => {
      rockPaperScissors.players[0].choice = "rock";
      rockPaperScissors.players[1].choice = "invalid";
      expect(rockPaperScissors.determineWinner()).toEqual("invalid choice");
    });

    test("should return 'invalid choice' if player1's choice is invalid", () => {
      rockPaperScissors.players[0].choice = "invalid";
      rockPaperScissors.players[1].choice = "rock";
      expect(rockPaperScissors.determineWinner()).toEqual("invalid choice");
    });
  });

  describe("handlePlayerTurns", () => {
    test("should switch the currentTurn property to the the second player index", () => {
      rockPaperScissors.handlePlayerTurns();
      expect(rockPaperScissors.currentTurn).toEqual(1);
    });

    test("should switch the currentTurn property to the first player index", () => {
      rockPaperScissors.currentTurn = 1;
      rockPaperScissors.handlePlayerTurns();
      expect(rockPaperScissors.currentTurn).toEqual(0);
    });
  });
});