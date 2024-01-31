import Player from "../src/js/player.js";

describe("Player", () => { 
  let player

  beforeEach(() => {
    player = new Player("John");
  });

  test("should create a player object with a name and score property", () => {
    expect(player.name).toEqual("John");
    expect(player.score).toEqual(0);
  });

  describe("makeChoice", () => { 
    test("should set the choice property to the argument passed in", () => {
      player.makeChoice("rock");
      expect(player.choice).toEqual("rock");
    });
  });

  describe("updateScore", () => {
    test("should increment the score property by 1", () => {
      player.updateScore();
      expect(player.score).toEqual(1);
    });
  });
});