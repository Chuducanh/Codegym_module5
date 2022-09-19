var x;
var sum = 0;
function dayFibonacci(x) {
    if (x == 1) {
        return 1;
    }
    if (x == 0) {
        return 0;
    }
    return dayFibonacci(x - 1) + dayFibonacci(x - 2);
}
x = 5;
for (var i = 1; i <= x; i++) {
    console.log(dayFibonacci(i));
    sum += dayFibonacci(i);
}
console.log(sum);
