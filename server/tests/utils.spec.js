const utils = require("../utils/utils");

describe("utils", () => {
  it("generateRandomString must return random number of fixed length based on the range provided", () => {
    const firstRandom = utils.generateRandomString(100, 900);
    expect(firstRandom.toString().length).toBe(3);
    const secondRandom = utils.generateRandomString(10000000, 90000000);
    expect(secondRandom.toString().length).toBe(8);
  });
  it("shuffleString must shuffle the input string", () => {
    const inputString = "136782";
    const shuffleString = utils.shuffleString(inputString);
    const result = inputString
      .split("")
      .every((item) => shuffleString.split("").includes(item));
    expect(result).toBe(true);
  });
  it("getMatchingCharsArray must return array of unique chars", () => {
    const charArray = utils.getMatchingCharsArray("16678834", "2900286");
    expect(charArray).toContain("8");
    expect(charArray).toContain("6");
  });
});
