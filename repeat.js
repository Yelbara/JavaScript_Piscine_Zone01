
function repeat(str, n)
{
    if(n < 0 || n == Infinity)
       throw new RangeError("Invalid repeat count");
    let n_str = "";
    n = Math.floor(n);
    while(n > 0)
    {
        n_str += str;
        n--;
    }
    return (n_str);
}
const str = "abc";
 
console.log(repeat(str, "3"));
console.log(str.repeat("3"));

