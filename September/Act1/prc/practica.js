let total = 0;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Put one number number\n', number => {
    total =+ number;
    readline.close();
});

readline.question('Put other number number\n', number2 => {
    total =+ number2;
    readline.close();
});

console.log(total);