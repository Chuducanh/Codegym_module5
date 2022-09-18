var x;
function sumFibonacci(x) {
    if (x <= 2) {
        return 1;
    }
    return sumFibonacci(x - 1) + sumFibonacci(x - 2);
}
function showFibonacci(x) {
    var n1 = 0, n2 = 1, nextTerm;
    for (var y = 1; y <= x; y++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
x = 5;
console.log(sumFibonacci(x));
sumFibonacci(x);
