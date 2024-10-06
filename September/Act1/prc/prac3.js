const reameplease = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

    reameplease.question('Put a month\n', (input) => {
        let season = (input);

        if(season.toLowerCase() == 'november' || season.toLowerCase() == 'december' || season.toLowerCase() == 'january' || season.toLowerCase() == 'february'){
            console.log('It\'s winter');
        }else if (season.toLowerCase() == 'june' || season.toLowerCase() == 'july' || season.toLowerCase() == 'august'){
            console.log('It\'s summer');
        }else if (season.toLowerCase() == 'september' || season.toLowerCase() == 'october'){
            console.log('It\'s autumn');
        }else if (season.toLowerCase() == 'march' || season.toLowerCase() == 'april' || season.toLowerCase() == 'may'){
            console.log('It\'s spring');
        }else{
            console.log('That isn\'t a month');
        }
        reameplease.close();
    });