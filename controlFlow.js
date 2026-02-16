//If else statements
let num = 10 + 2;

if (num > 2 && num < 20) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

let user = "employee";

if (user === "guest") {
  console.log("login Denied");
} else if (user === "employee") {
  console.log("Successfully Logged in");
}

let myName = "Ama";

let nameLength = myName.length;
console.log(nameLength);

if (nameLength > 5) {
  alert("More than 5");
  ``;
} else if (nameLength === 5) {
  console.log("Exactly 5 letters");
} else {
  console.log("Less than 5 letters");
}

//Switch Statements
let favFood = "Yam";

switch (favFood) {
  case "Pizza":
    console.log(`That's right! ${favFood} is my favourite!`);
    break;
  case "Rice":
    console.log(`That's right! ${favFood} is my favourite!`);
    break;
  case "Sharwarma":
    console.log(`That's right! ${favFood} is my favourite!`);
    break;
  case "Yam":
    console.log(`That's right! ${favFood} is my favourite!`);
    break;
  case "Plantain":
    console.log(`That's right! ${favFood} is my favourite!`);
    break;
  default:
    console.log(`${favFood} not found...I'm hungry.`);
    break;
}

//Ternary Operator

let name = " ";

let message = 1 > 10 ? "Condition is TRUE" : "Condition is FALSE";
console.log(message);

let time = "11:00";

let greeting = time < "12:00" ? "Good Morning" : "Good Evening";
console.log(greeting);

//For Loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const colors = ["Red", "Blue", "Green", "Yellow", "White"];

for (let color = 0; color < colors.length; color++) {
  console.log(`${colors[color]} is my favourite color`);
}
