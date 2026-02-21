function indexOf(arr, value, ind)
{
    if(arr[ind] == value)
        return ind;
    let i = 0;
    for(v of arr)
    {
        if(v == value)
            return i;
        i++;
    }
    return -1;

}

function lastIndexOf(arr, value)
{
    let i = 0;
    let n = -1;
    for(v of arr)
    {
        if(v == value)
            n = i;
        i++;
    }
    
    return n == -1 ? -1 : n;
}

function includes(arr, value)
{
    for(v of arr)
    {
        if(v == value)
            return true;
    }
    return false;

}

const arr  = [3,4,-1,4,2,-3, 7, 2, 1, 7, 2];
console.log(lastIndexOf(arr, 3));
