const reameplease = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(str) {
    let arrStr = str.split("");
    return arrStr.reverse().join("");
}

    reameplease.question('Say me a sentence\n', (input) => {
        let sentence = input;
    

        console.log('Sentence: ' + sentence + 
                    '\n\nThe length of the sentence is ' + sentence.length + 
                    '\n\nUpper case: ' + sentence.toUpperCase() + 
                    '\n\nLower case: ' + sentence.toLowerCase() + 
                    '\n\nReverse: ' + reverseString(sentence));
        reameplease.close();
    });