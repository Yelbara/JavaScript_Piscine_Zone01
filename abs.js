function isPositive(num)
{
    if(num > 0)
        return true;
    return false;
}

function abc(num)
{
    if(num == 0)
        return 0;
    if(isPositive(num))
        return num ;
    else
        return -num;
}

console.log(abc(-5));
console.log(abc(5));
console.log(abc(0));
console.log(abc(-0));
console.log(abc(1.1));
console.log(abc(-1.1));