let date = new Date();
console.log(date.getDate());

let hour = date.getHours();
let min = date.getMinutes();
console.log(`${hour}:${min}`);

let day = date.toLocaleString("default", { weekday: "long" });
console.log(day);
