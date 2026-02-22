function reverse(ptr)
{
    let size = ptr.length -1;
    let arr = [];
    for(val of ptr)
    {
        arr[size] = val;
        size--;
    }
    if(typeof(ptr) == "string")
        arr = arr.join("");
    return arr;
}

const arr = [1,2,3];
const str = "abc";
console.log(reverse(str));
console.log(reverse(arr));