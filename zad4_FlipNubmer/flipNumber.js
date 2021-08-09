function flipInt(numberForFlip) {
    var digit, result = 0

    while (numberForFlip) {
        digit = numberForFlip % 10;  // получается здесь мы через остаток получаем последнее число
        result = (result * 10) + digit; // так как мі уже задали что стартовая точка 0  мі начинаем с нее записівать число
        numberForFlip = numberForFlip / 10 | 0;
    }

    return result;
}

alert("Reversed number: " + flipInt(+prompt("Enter a value"))
)

