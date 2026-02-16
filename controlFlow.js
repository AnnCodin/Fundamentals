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
  alert("More than 5");``
} else if (nameLength === 5) {
  console.log("Exactly 5 letters");
} else {
  console.log("Less than 5 letters");
}
