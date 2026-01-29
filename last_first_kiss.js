function first(arr)
{
    if(arr.length > 0)
        return(arr[0]);
    return undefined;
}

function last(arr)
{
    if(arr.length > 0)
        return(arr[arr.length - 1]);
    return undefined;
}
function kiss(arr)
{
    if(arr.length > 0)
    {
        let copy = [];
        copy[0] = first(arr);
        copy[1] = last(arr);
        return(copy);
    }
    return undefined
}
