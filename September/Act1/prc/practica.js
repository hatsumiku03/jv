let i = 0;
let total = 0;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

for(let i = 0; i < 5; i++){
readline.question('Put one number number\n', number => {
        total =+ number;
        console.log(total);
        readline.close();
    });
}
console.log(total);