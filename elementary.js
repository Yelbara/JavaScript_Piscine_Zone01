function multiply(a, b)
{
    if(b == 0)
        return 0;
    let n = a;
    let s = 1;
    if(b < 0)
    {
        b = -b;
        s = -1;
    }
    for(;b -1  > 0; b--)
        n += a;
    return s < 0 ? -n : n;
}

function divide(a, b)
{
    if(b == 0)
        throw new RangeError("Division by zero");
    let n = 0;
    let s = 1;
    if(b < 0)
        s = -1;
    a = Math.abs(a);
    b = Math.abs(b);
    while(a >= b)
    {
        a -= b;
        n++;
    }
    return s < 0 ? -n : n;
}
function modulo(a, b)
{
    if (b === 0)
        throw new RangeError("modulo by zero");
    const s = a < 0;
    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b)
        a -= b;

    return s ? -a : a;
}

console.log(modulo(10,3));
console.log(multiply(10,-3));
console.log(divide(20,3));