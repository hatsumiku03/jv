const reameplease = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

    reameplease.question('Put number\n', (input) => {
        let number = (input);
        
        if (number % 2 === 0) {
            console.log(`${number} is even`);
        } else {
            console.log(`${number} is odd`);
        }
        reameplease.close();
    });