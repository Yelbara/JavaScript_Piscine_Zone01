function arrToSet(vr)
{
    return (new Set([...vr]));
}   
function arrToStr(vr)
{
    return (String(vr));
}
function setToArr(vr)
{
    return ([...vr])
}
function setToStr(vr)
{
    return(String(setToArr(vr)));
}
function strToArr(vr)
{
    return ([...vr]);
}
function strToSet(vr)
{
    return (new Set([...vr]));
}
function mapToObj(vr)
{
    // return (Object.fromEntries([...vr]));
     return (Object.fromEntries(vr));
}
function objToArr(vr)
{
    return (Object.values(vr)); 
}
function objToMap(vr)
{
    const arr = Object.entries(vr);
    return (new Map([...arr]));
}
function arrToObj(vr)
{
    const map = arr.map((value, index) => // this map function is take auto value , index 
        {
            return([index, value]);
        }
    );
    return(mapToObj(map));
}
function strToObj(vr)
{
    const map = arr.map((value, index) => // this map function is take auto value , index 
        {
            return([index, value]);
        }
    );
    return(mapToObj(map));
}

function  superTypeOf(val)
{
    if(val === null)
        return 'null';
    if(val instanceof Set)
        return 'Set' ;
    if(Array.isArray(val))
            return 'Array';
    if(val instanceof Map)
        return 'Map' ;
    if(val === undefined)
        return 'undefined';
    return typeof(val);
}






// ----------------------- TEST ----------------------------------

const set = new Set(["abc", 1337, "yassine"]);
const map = new Map(
    [
        [0 , "a"],
        [1 , "b"]
    ]
);
const obj = {
    "a" : 1,
    "b" : 2,
    "c" : 3
}

const arr = ["a", "b", "c"];
const str = "abc";

console.log(superTypeOf(arr));






// console.log(arrToObj(arr));
// console.log(Object.fromEntries([
//     ["0", "a"],
//     ["1", "b"],
//     ["2", "c"]]));