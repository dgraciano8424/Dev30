console.log("hello world");
var secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
//a built-in method that removes the end index of an array
//Step 1
secretMessage.pop();

//prints the length of the array out in console
//Step 2
console.log(secretMessage.length);

//"pushes" the strings to the end of the index of the array
//Step 3
secretMessage.push("to", "Program");

//Using .splice() built-in method to change "easily" to "right"
// Step 4
secretMessage.splice(7, 1, "right");

//Using built-in array method that removes the first index of an array.
//Step 5
secretMessage.shift();

//Using .splice() to add "Programming" to the beginning of the array.
//Step 6
secretMessage.splice(0, 0, "Programming");

//Using splice to remove the index 6 and the 4 spots next to it and then add the string "know".
//Step 8
secretMessage.splice(6, 5, "know");

//Using a built in method .join() to join the indices of the array into a string. Added a space between the words with (" ").
//Step 9
console.log(secretMessage.join(" "));
