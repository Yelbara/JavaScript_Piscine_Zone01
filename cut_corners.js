function round(v)
{
    let s = 1;
    if(v < 0)
        s = -1;
    if(s == 1)
        return ((v - Number.parseInt(v) >= 0.5) ? (Number.parseInt(v) + 1) : (Number.parseInt(v)));
    else
        return ((Number.parseInt(v)  - v > 0.5) ? ((Number.parseInt(v) - 1)) : (Number.parseInt(v)));
}


function ceil(v)
{
    let s = 1;
    if(v < 0)
        s = -1;
    if(s == 1)
        return ((v - Number.parseInt(v) != 0) ? (Number.parseInt(v) + 1) : (Number.parseInt(v)));
    else
        return (Number.parseInt(v));
}

function floor(v)
{
    let s = 1;
    if(v < 0)
        s = -1;
    if(s == 1)
        return Number.parseInt(v);
    else
        return ((Number.parseInt(v)  - v !=  0) ? ((Number.parseInt(v) - 1)) : (Number.parseInt(v)));
}

function trunc(v)
{
    return Number.parseInt(v);
}




