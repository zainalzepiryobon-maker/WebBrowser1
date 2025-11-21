document.getElementById("button2").textContent = `click me too`;

let y;
let x;

x = 26;
y = x ** 7;
y = (y / (26 ** 7) + 27) % 3

console.log(`the value of x is ${x}`)

console.log(`the value of y is ${y}`)

// username = window.prompt(`What Is Your Username?`)

let username;

document.getElementById("Submit").onclick = function(){
  username = document.getElementById("Text").value;
  document.getElementById("H11").textContent = `Hello ${username}`
  console.log(username);
}

