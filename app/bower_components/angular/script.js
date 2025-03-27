const age = 25; //fix variable
let tasks = 25;

let a = 10;
let b = 20;
let c = a + b;
console.log(c); // 30
console.log(age); // 25

let statment = `I am a string ${age} , ${tasks} task to do`;
console.log(statment); // I am a string 25 , 25 task to do
// length of string
console.log(statment.length); // 28

let newstatment = statment.replace("task", "work");
console.log(newstatment); // I am a astring 25 , 25 work to do

let first_statment = newstatment.slice(0, 10);
console.log(first_statment);


let totalPrice = 120;
let count = 7;
let averagePrice = totalPrice / count;
console.log(averagePrice.toFixed(2)); // 17.14
console.log(Math.round(averagePrice)); // 17


const passScore = 60;
let score = 80;
console.log(score >= passScore); // true
// == ,!==
// === this will also valid with data type

let attendance = 0.9;
let grade = 0.7;

if (attendance >= 0.9 && grade >= 0.7) {
    console.log("You passed the course");
} else if (attendance < 0.9 || grade < 0.7) {
    console.log("You failed the course");
} else {
    console.log("You need to improve your grade");
}

if (score >= passScore) {
    console.log("You passed the exam");
} else {
    console.log("You failed the exam");
    }

let exam = [80, 90, 70, 60, 85];
exam.push(90);
exam.push(85);
// exam.pop(); // ÷

console.log(exam);
console.log(exam[0]); // 80
console.log(exam[1]); // 90
console.log(exam[2]); // 70
console.log(exam.pop()); // 85
console.log(exam.indexOf(90)); // 1
console.log(exam.length); // 6

console.log("for loop");
for (let i = 0; i < exam.length; i++) {
    console.log(exam[i]);
    console.log(`The score of student ${i + 1} is ${exam[i]}`);
}