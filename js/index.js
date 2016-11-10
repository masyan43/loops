var numbFib = Number(prompt('Enter natural number [1; +∞)'));
while (numbFib <= 0) {
    numbFib = Number(prompt('Enter correct natural number! From 1 to +∞'));
}
var resultLoop;
var resultRecursion;
function fibonacciLoop(numbFib) {
    var arrFib = [1, 1];
    if (numbFib === 1) {
        document.write('Fibonacci sequence: ' + arrFib[0]);
        return resultLoop = arrFib[0];
    } else if (numbFib >= 2) {
        document.write('Fibonacci sequence: ' + arrFib[0] + ' ' + arrFib[1] + ' ');
        for (var i = 2; i < numbFib; i++) {
            arrFib[i] = arrFib[i - 2] + arrFib[i - 1];
            arrFib.push(arrFib[i]);
            document.write(arrFib[i] + ' ');
        }
        return resultLoop = arrFib[numbFib - 1];
    }
}
document.write('<b>By loop:</b> <br>')
fibonacciLoop(numbFib);
document.write('<br> Fibonacci number ' + numbFib + ': ' + '<u>' + resultLoop + '</u>' + '<br> <br>');
function fibonacciRecursion(numbFib) {
    if (numbFib <= 1) {
        return resultRecursion = numbFib;
    } else if (numbFib > 1) {
        return resultRecursion = fibonacciRecursion(numbFib - 2) + fibonacciRecursion(numbFib - 1);
    }
}
document.write('<b>By recursion:</b> <br>');
fibonacciRecursion(numbFib);
document.write('Fibonacci number ' + numbFib + ': ' + '<u>' + resultRecursion + '</u>');
