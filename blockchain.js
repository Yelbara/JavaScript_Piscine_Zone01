const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)

function blockChain(data, prev)
{
    if(prev === undefined)
        prev = { index: 0, hash: '0' };
    data = data;
    const index = prev.index + 1;
    const hash = hashCode(index + prev.hash + JSON.stringify(data));
    const block = {
        data : data,
        prev : prev,
        index :index,
        hash : hash,
        chain : function(new_data)
        {
            return blockChain(new_data, this);
        }
        
    };

    return block;
}

const first = blockChain({"a" : 1});

console.log(first.data);
console.log(first.prev);
console.log(first.hash);


console.log("-----------------------------------------------")

const second =  blockChain({"b" : 2}, first);
console.log(second.data);
console.log(second.prev);
console.log(second.hash);

console.log("-----------------------------------------------")

const three = second.chain({"c" : 3});
console.log(three.data);
console.log(three.prev);
console.log(three.hash);



