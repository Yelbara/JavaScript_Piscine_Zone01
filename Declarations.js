let arr = [4,'2'];
Object.freeze(arr);
let escapeStr = "`,\\,\/,\",\'"
let obj  =
{
    str : "yassine",
    num : 1337,
    bool : true,
    undef : undefined
}
Object.freeze(obj);
let nested = {
    arr : [4, undefined, 2],
    obj : {
        str : "new yassine",
        num : 13,
        bool : false
    }
}
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);

// console.log(nested.obj.num);