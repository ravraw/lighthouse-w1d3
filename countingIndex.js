const countIndex = someString => {
  if (typeof someString !== "string") {
    return "Enter a valid string";
  }
  let stringArray = someString.split("");
  let indexMap = {};
  stringArray.map((char, index) => {
    if (char !== " ") {
      indexMap[char] ? indexMap[char].push(index) : (indexMap[char] = [index]);
    }
  });
  return indexMap;
};

console.log(countIndex("lighthouse in the house"));
