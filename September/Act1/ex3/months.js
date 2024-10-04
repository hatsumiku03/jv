const months = ["1 - January", "2 - February", '3 - March', '4 - April', '5 - May', '6 - June', '7 - July', '8 - August', '9 - September', '10 - October', '11 - November', '12 - December'];

let loop = "";

for (let i = 0; i < months.length; i++) {
    loop += "   <li>" + months[i] + "</li>";
}

document.getElementById("cloop").innerHTML = loop;