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

const button3 = document.getElementById("button3");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");

const min1 = 1;
const max1 = 100;

let randomnum1;
let randomnum2;
let randomnum3;

button3.onclick = function(){
  randomnum1 = Math.floor(Math.random() * max1) + min1;
  randomnum2 = Math.floor(Math.random() * max1) + min1;
  randomnum3 = Math.floor(Math.random() * max1) + min1;
  label2.textContent = randomnum1;
  label3.textContent = randomnum2;
  label4.textContent = randomnum3;
}

// BORDER

const checkbox1 = document.getElementById("checkbox1");
const humanButton = document.getElementById("humanButton");
const trexButton = document.getElementById("trexButton");
const birdButton = document.getElementById("birdButton");

const submit3 = document.getElementById("submit3");

const subResult = document.getElementById("subResult");
const humanResult = document.getElementById("subResult");


submit3.onclick = function(){
  if(checkbox1.checked){
    subResult.textContent = "You are...";
    
    if(humanButton.checked){
      humanResult.textContent = "You are a Human!";
    }
    else if(trexButton.checked){
      humanResult.textContent = "You are a T-Rex!";
    }
    else if(birdButton.checked){
      humanResult.textContent = "You are a Bird!";
    }
  }
  else{
    subResult.textContent = "Please press the checkbox";
  }
  
}

// BORDER

// let username2 = window.prompt(`what is your username?`);

// username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();

// console.log(username2)

const min2 = 1;
const max2 = 100;
const answer = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

let attempts1 = 0;
let guess1;
let running = true;

while(running){

  guess1 = window.prompt(`Guess a number between ${min2} - ${max2}`);
  guess1 = Number(guess1);

  if(isNaN(guess1)){
    window.alert("Please enter a valid number");
  }
  else if (guess1 < min2 || guess1 > max2){
    window.alert("Please enter a valid number");
  }
  else{
    attempts1++;
    if(guess1 < answer){
      window.alert("TOO LOW! Try again");
    }
    else if(guess1 > answer){
      window.alert("TOO HIGH! Try again");
    }
    else{
      window.alert(`CORRECT! The answer was ${guess1}. It took you ${attempts1} attempts`);
      running = false;
    }
  }
}

// BORDER