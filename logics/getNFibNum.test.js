const getNFibNum = require("./getNFibNum");

describe("properly finds fibbonacci number", () => {
  it("first is 1, second is 1 fifth is 5", () => {
    expect(getNFibNum(1)).toBe(1);
    expect(getNFibNum(2)).toBe(1);
    expect(getNFibNum(5)).toBe(5);
  });
});
