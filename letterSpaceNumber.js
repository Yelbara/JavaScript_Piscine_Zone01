function letterSpaceNumber(str)
{
    return str.match(/[a-zA-Z]\s\d(?!\d)/g) || [];
}

// const s = /[a-zA-z]\s\d(?![a-zA-z0-9])/;

// console.log(s.test('a 11'));
console.log("a 1, x 2 d 4");