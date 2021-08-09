let count = prompt("Input lenght of array");
let massive = [];
for (var i = 0; i < count; i++) {
    massive[i] = prompt("Input element of array");
}
let results = minCount(massive);
function minCount(massive) {
    var numberOfElements = massive.length, modul = Math.abs(massive[0]);
    for (var i = 1; i < numberOfElements; i++) {
        var nextmodul = Math.abs(massive[i]), calcnumber = numberOfElements;
        while (modul && nextmodul) { modul > nextmodul ? modul %= nextmodul : nextmodul %= modul; }
        modul = Math.abs(calcnumber * massive[i]) / (modul + nextmodul);
    }
    return modul;
}
alert(results);