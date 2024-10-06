const allNumbers = [6,8,3,12,18];
let numbersHigherThanEight = [];
let sum = 0;

for(let i = 0; i < allNumbers.length; i++){
    if(allNumbers[i] > 8){
        numbersHigherThanEight.push(allNumbers[i]);
    }
}

for(let i = 0; i < numbersHigherThanEight.length; i++){
        sum += numbersHigherThanEight[i];
}


    console.log('The sum of numbers highers than 8 is ' + sum);