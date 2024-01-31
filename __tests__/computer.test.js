import Computer from "../src/js/Computer";

describe("Computer", () => {  
  test("should create a computer object with a name, score, and choice property", () => {  
    const computer = new Computer();
    expect(computer.name).toEqual("Computer");
    expect(computer.score).toEqual(0);
    expect(computer.choice).toEqual(null);
  });
})