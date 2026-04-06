const normal = /hi/;
const end = /hi$/;
const begin = /^hi/;
const beginEnd = /^hi$/


let pattern = /hi/;
// /hi$/.test("hello yassin hi") :> end 
// /hi^/.test("hello yassin hi") :> first 
console.log(normal.test("hi"));
console.log(begin.test("hi i am here"));
console.log(end.test("heloo yassin hi"));
console.log(beginEnd.test("hi"));
