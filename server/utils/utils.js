exports.generateRandomString = (startRange, endRange) => {
  return Math.floor(startRange + Math.random() * startRange);
};

exports.shuffleString = (originalString) => {
  var arr = originalString.split("");

  arr.sort(() => {
    return 0.5 - Math.random();
  });
  originalString = arr.join("");
  return originalString;
};

// This function return array of unique chars from a string
uniqueCharArray = (str) => {
  return [...new Set([...str])];
};

// This function return array of matching chars between two strings
exports.getMatchingCharsArray = (firstString, secondString) => {
  const charArray = uniqueCharArray(firstString);
  return charArray.filter((item) => {
    return secondString.includes(item);
  });
};
