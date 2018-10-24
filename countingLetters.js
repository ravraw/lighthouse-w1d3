const countLetters = someString => {
  if (typeof someString !== "string") {
    return "Enter a valid string";
  }
  let stringMap = {};
  for (let char of someString) {
    if (char !== " ") {
      stringMap[char] = (stringMap[char] || 0) + 1;
    }
  }

  return stringMap;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters(123));
console.log(countLetters([]));
console.log(countLetters({}));
console.log(countLetters(undefined));
console.log(countLetters(null));
console.log(countLetters());
