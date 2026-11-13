// alert("Javascript is fun");

// console.log(b);
// let a;
// var b = 50;

// let A;
// const c = 30;

// // let a = 50;
// var b = 120;
// a = 40;

// // c = 45;
// let fullname = "Chukwuebuka Ed";
// let FullName = "Chukwuebuka Ed"; // Pascal Case
// let full_name;
// let fullName = "Chukwuebuka Ed"; // Camel Case

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(4 + 8);
// console.log(4 + a);

let x = 100 + 50;

// x = x - 50;
x -= 50;

// x = x + 40;
x += 40;

// x = x / 2;
x /= 2;

// x = x * 3;
x *= 3;

// x = x ** 3;
x **= 2;

// x = x % 8;
x %= 8;

// x = x + 1;
// x += 1;
x++;

x = x - 1;
x -= 1;
x--;

console.log(x);

const studentsNo = 50;

const rainy = false;

const path = "Frontend Development";

const newStudentsNo = "150";

console.log(typeof studentsNo);
console.log(typeof rainy);
console.log(typeof path);
console.log(typeof newStudentsNo);

console.log(newStudentsNo - studentsNo);
console.log(newStudentsNo * studentsNo);
console.log(newStudentsNo / studentsNo);
console.log(newStudentsNo + studentsNo);

console.log("Emeka" + "Eze");

// ---------OR OPERATOR------------
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log(5 > 8 || 3 < 10);

// ----------AND OPERATOR---------
console.log(false && false);
console.log(false && true);
console.log(true && false);
console.log(true && true);

// ------- NOT OPERATOR-----------
console.log(!true);
console.log(!false);

const weather = prompt("What is the weather temperature in Celsius");

// if (weather >= 23 && weather <= 32) {
//   console.log("Weather is rainy. Please take an umbrella");
// } else if (weather > 32) {
//   console.log("Weather is sunny. Please wear something light");
// } else if (weather < 23) {
//   console.log("Weather is approaching freezing point");
// } else {
//   console.log("Invalid weather temperature");
// }

switch (true) {
  case weather >= 23 && weather <= 32:
    console.log("Weather is rainy. Please take an umbrella");
    break;

  case weather > 32:
    console.log("Weather is sunny. Please wear something light");
    break;

  case weather < 23:
    console.log("Weather is approaching freezing point");
    break;

  default:
    console.log("Invalid figure");
}
