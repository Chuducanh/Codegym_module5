let x: number;
let sum: number = 0;

function dayFibonacci(x : number): number {
    if (x == 1) {
        return 1;
    }
    if( x== 0)
    {
        return 0;
    }
    return dayFibonacci(x - 1) + dayFibonacci(x - 2);
}

x = 5;
for(let i: number = 1; i <= x; i++)
{
    console.log(dayFibonacci(i));
    sum+= dayFibonacci(i);
}
console.log(sum);
