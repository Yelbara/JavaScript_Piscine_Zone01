const str = "Hello World";
const str_v2 = "abc def mama";
const arr = ["a", "b", "c", "d", "e"];

function yell(str)
{
    return(str.toUpperCase());
}
function words(str)
{
    return(str.split(" "));
}

function sentence(arr)
{
    return(arr.join(" "));
}
function whisper(str)
{
    let temp = "*" + str.toLowerCase() + "*";
    return(temp);
}

function capitalize(str)
{
    let temp =  str.substring(0,1).toUpperCase();
    temp += str.substring(1).toLowerCase();
    return(temp);
}

console.log(yell(str));
console.log(words(str_v2));
console.log(sentence(arr));
console.log(whisper(str));
console.log(capitalize(str));