import Player from '../src/js/Player.js';

describe("Player", () => { 
  test("should create a player object with a name and score property", () => {
    const player = new Player("John");
    expect(player.name).toEqual("John");
    expect(player.score).toEqual(0);
  });
});