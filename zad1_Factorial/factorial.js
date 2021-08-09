/*
I find that way find factorial without cуcle
function factorial(numberOfFactorial) {
    return numberOfFactorial ? numberOfFactorial * factorial(numberOfFactorial - 1) : 1;
}

alert(factorial(6));*/

var writeNumber = prompt('Please enter an factorial number');
var factorial = 1;

for (i = 0; i < writeNumber; i++) {
    factorial = factorial * (writeNumber - i);
}

alert(writeNumber + '! = ' + factorial);