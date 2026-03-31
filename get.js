function get(src, path)
{
    let strs = path.split(".");
    let current = src;
    for(let str of strs)
    {
        current = current[str];
    }
    return current;

}

const src = {
     nested: {
         key: 'peekaboo' ,
         obj: {flag : "yassine"}
        }
    };
const path = 'nested.obj.flag';
// let strs = path.split(".");
// let current;
// current = src;
// current = current["nested"];
// current = current["key"];
// console.log(src.nested.obj.flag);
console.log(get(src, path));


