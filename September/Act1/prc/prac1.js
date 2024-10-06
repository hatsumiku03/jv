let allNumbers = [];
let n = 0;

const reameplease = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('YOU WILL WRITE 5 NUMBERS AND YOU GET THE SUM OF ALL FIVE');

function askForNumber() {
    if (n < 5) {
        reameplease.question('Put a number\n', (input) => {
            let number = parseFloat(input);
            if (!isNaN(number)) {
                n += 1;
                allNumbers.push(number);
            } else {
                console.log('THAT\'S NOT A NUMBER, PUT A NUMBER PLEASE');
            }
            askForNumber();
        });
    } else {
        // Sum
        let sum = 0;
        for (let i = 0; i < allNumbers.length; i++) {
            if (allNumbers[i] > 100) {
                // A part of the exercise
                console.log('\n * ' + allNumbers[i] + ' es mayor que 100\n');
            }
            sum += allNumbers[i];
        }
        // Sum
        console.log('The sum of all numbers you put is:\n', sum);
        reameplease.close();
    }
}

askForNumber();
