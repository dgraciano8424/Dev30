//Step 1
var input = "P. Sherman 42 Wallaby Way Sydney";

//Step 2
const vowels = ["a", "e", "i", "o", "u"];

//Step 3
var resultArray = [];

//Step 4
//For loop that iterates through a string.
for (let i = 0; i < input.length; i++) {
  // var resultArray = input[i];

  // console.log(resultArray);
  //Step 5
  //console logging the "iterator" numbered position.
  // console.log(i);

  //Step 10 / 11
  //Step 6
  //Using a for loop that is nested inside another for loop that console logs (iterates) through all the vowels every time the outer loop is ran.
  for (let j = 0; j < vowels.length; j++) {
    // console.log(vowels[j]);

    //Step 7
    //Console.log'd iterator number from this inner for loop
    // console.log([j]);

    //Step 8 Inside the second for loop is a conditional that will print the matching letters, how many appearances and mark them "True".
    if (vowels[j] === input[i]) {
      // console.log(input[i], "True");
      //Step 9  Now instead of just logging the letters, add them to the results array.
      resultArray.push(vowels[j]);
      if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
}
//Step 9.2 Console log'd resultArray to check if working
//Step 12 as well.
// console.log(resultArray);
var resultString = resultArray.join("");
resultString = resultString.toUpperCase();
console.log(resultString);
