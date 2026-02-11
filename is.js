const is = {}

is.num =  function (n)
{
    if (typeof n === "number" && !isNaN(n))
        return true;
    else
        return false;
}

is.nan = function (n)
{
    return isNaN(n);
}

is.str = function (st)
{
    if (typeof st === "string")
        return true;
    return false;
}
is.bool = function (b)
{
    if (typeof b === "boolean")
        return true;
    return false;
}
is.undef = function (u)
{
    if(typeof u === "undefined")
        return true;
    return false;
}

is.def = function (d)
{
    if(d == undefined)
        return false;
    return true;
}

is.arr = function (ar)
{
    return(Array.isArray(ar));
}

is.obj = function (ob)
{
    if((typeof ob === "object"  || ob == null) && !Array.isArray(ob) && ob !== undefined)
        return true;
    return false;
}

is.fun = function (f)
{
    if(typeof f == "function")
        return true;
    return false;
}
is.truthy = function (val)
{
    if(val)
        return true;
    return false;       
}
is.falsy = function (val)
{
    if(is.truthy(val) == true)
        return false;
    return true;
}


console.log(is.num(5)); // true
console.log(is.num("5"));
console.log(is.nan(NaN)); // true
console.log(is.nan(5));
console.log(is.str("Hello")); // true
console.log(is.str(5));
console.log(is.bool(true)); // true
console.log(is.bool("true"));
console.log(is.undef(undefined)); // true
console.log(is.undef(null));
console.log(is.arr([1, 2, 3])); // true
console.log(is.arr("not an array"));
console.log(is.obj({ key: "value" })); // true
console.log(is.obj(null)); // true
console.log(is.obj("not an object"));
console.log(is.fun(function() {})); // true
console.log(is.fun("not a function"));
console.log(is.truthy(1)); // true
console.log(is.truthy(0));
console.log(is.falsy(0)); // true
console.log(is.falsy(1));   
