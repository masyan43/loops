var numbFib = Number(prompt('Enter number [1; +∞)'));
while (numbFib <= 0) {
    numbFib = Number(prompt('Enter correct number! From 1 to +∞'));
}
function fibonacci(numbFib) {
    var arrFib = [1, 1];
    if (numbFib === 1) {
        document.write('Fibonacci sequence: ' + arrFib[0] + '<br>');
        document.write('Your ' + numbFib + ' Fibonacci number: ' + arrFib[0] + '<br>');
    } else if (numbFib >= 2) {
        document.write('Fibonacci sequence: ' + arrFib[0] + arrFib[1]);
        for (var i = 2; i < numbFib; i++) {
            arrFib[i] = arrFib[i - 2] + arrFib[i - 1];
            arrFib.push(arrFib[i]);
            document.write(arrFib[i]);
        }
        document.write('<br> Your ' + numbFib + ' Fibonacci number: ' + arrFib[numbFib - 1]);
    }
}
fibonacci (numbFib);
