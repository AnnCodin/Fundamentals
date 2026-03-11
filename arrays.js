let countries = ["Ghana", "Nigeria", "Benin"];

countries[3] = "Togo";

console.log(countries);

//Multi-dimensional arrays

let colours = [
  "mid-night blue",
  "indigo",
  "purple",
  ["black", "white", "grey"],
];

console.log(colours[3][2]);

//Array methods

let fruits = ["pear", "mango", "orange", "banana"];

fruits.unshift("pineapple", "watermelon");

fruits.push("strawberry", "grapes");

console.log(fruits);

fruits.splice(4, 1, "lemon");

console.log(fruits);
