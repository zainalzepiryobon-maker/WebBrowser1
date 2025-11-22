document.getElementById("button2").textContent = `click me too`;

let y;
let x;
let z;

x = 26;
y = x ** 7;
y = (y / (26 ** 7) + 27) % 3

console.log(`the value of x is ${x}`)

console.log(`the value of y is ${y}`)

let username;

document.getElementById("Submit1").onclick = function(){
  username = document.getElementById("Text1").value;
  document.getElementById("H11").textContent = `Hello ${username}`
  console.log(username);
}

// let age = window.prompt(`How old are you?`);
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

const PI = 3.14159
let radius
let circumference

document.getElementById("Submit2").onclick = function(){
  radius = document.getElementById("Text2").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("H12").textContent = `The circumference of the circle is ${circumference}cm`
  console.log(username);
}

// BORDER

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");
let count = 0;

increase.onclick = function(){
  count++;
  countLabel.textContent = count;
}

decrease.onclick = function(){
  count--;
  countLabel.textContent = count;
}

reset.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}

//BORDER

