import Computer from "../src/js/Computer";

describe("Computer", () => {  
  let computer;

  beforeEach(() => {
    computer = new Computer();
  });

  test("should create a computer object with a name, score, and choice property", () => {  
    expect(computer.name).toEqual("Computer");
    expect(computer.score).toEqual(0);
    expect(computer.choice).toEqual(null);
  });

  describe("makeChoice", () => {
    test("should set the choice property to a random choice", () => {
      computer.makeChoice();
      expect(["rock", "paper", "scissors"]).toContain(computer.choice);
    });
  });
});