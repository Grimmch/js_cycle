var number = prompt('Please enter number');
var powNumber = prompt('Please enter a pow');
function pow(number, powNumber) {
    let result = number;
    for (let i = 1; i < powNumber; i++) {
        result *= number;
    }
    return result;
}
alert(pow(number, powNumber));