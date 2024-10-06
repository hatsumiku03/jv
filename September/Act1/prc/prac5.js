const reameplease = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

    reameplease.question('Put a price for see the iva extra\n', (input) => {
        let number = Number(input);
    
        let iva = number * 0.21;

        let totalprice = number + iva;

        console.log('individual IVA is ' + iva +'\nThe price with the iva is ' + totalprice);
        reameplease.close();
    });