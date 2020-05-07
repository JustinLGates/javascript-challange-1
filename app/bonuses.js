//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2";

function camelCase(str) {
  let words = str.split(" ");
  let result = [words[0]];
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join("");
}

// let words = str.split(" ");
// let result;
// words.forEach((word) => {
//   isNaN(word)
//     ? (result += word.split("")[0].toUpperCase() + word.slice(1))
//     : (result += word);
// });
// return result;
