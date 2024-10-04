let number1 = 15;
let number2 = 16;
let total = number1 + number2;

const numbers = [number1 +' '+'+'+' '+number2, , "Mr Babu"];

let loop = "";
for (let i = 0; i < numbers.length; i++) {
   loop += "   <li>" + numbers[i] + "</li>";
}

document.getElementById("cloop").innerHTML = loop;