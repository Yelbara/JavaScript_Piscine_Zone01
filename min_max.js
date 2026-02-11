function max(a, b)
{
    return a < b ? b : a;
}
function min(a, b)
{
    return a > b ? b : a;
}

console.log("max between 3 and 5 is " + max(3, 5));
console.log("min between 3 and 5 is " + min(3, 5));