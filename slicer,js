function slice(ptr, start, end)
{
    let new_arr = [];
    let len = ptr.length;

    if (start === undefined)
        start = 0;
    if (end === undefined)
        end = len;

    if (start < 0)
        start = len + start;
    if (end < 0)
        end = len + end;

    if (start < 0)
        start = 0;
    if (end > len)
        end = len;

    // Copy elements
    for (let i = start; i < end; i++)
        new_arr.push(ptr[i]);

    // If original was string → return string
    if (typeof ptr === "string")
        return new_arr.join("");

    return new_arr;
}
const animals = ["ant", "bison", "camel", "duck", "elephant"];
const str = "hello world";
console.log(slice(animals, -2, 4));
console.log(slice(str, 1, 5));