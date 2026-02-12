//Single, double, backtick
let s = "single";
let d = "double";
let b = `backtick`;

//Speech Marks
let speech = 'Martin Luther King said: "I have a dream."';
console.log(speech);

let tip = "We can escape quotes by using \\";
console.log(tip);

//String concatenation
let sentence1 = "I am learning";
let sentence2 = "JavaScript";

// let result = sentence1 + " " + sentence2;
// console.log(result);

//String Concat
let result = sentence1.concat(" ", sentence2);
console.log(result);

//Template literals
let firstName = "Your name";
let course = "JavaScript";
let channel = "Dev Dreamer";

let info = `${firstName} is learning ${course} with ${channel}.`;
console.log(info);

//String Methods
let x = "I am watching Dev Dreamer.";
console.log(x.toUpperCase());
console.log(x.slice(14, 25));
