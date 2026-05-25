
// old version
// function vowelDots(str)
// {
//     new_str = "";
//     for(x of str)
//     {
//         if(x == 'a' || x == 'i' || x == 'e' || x == 'o'  || x == 'u')
//         {
//             new_str += x;
//             new_str += ".";
//         }
//         else
//             new_str += x;

//     }
//     return new_str
// }


// new version with regex 
function vowelDots(str)
{
    let vr = /[aeiou]/g;
    let new_str = str.replace(vr, (v) => v + ".");
    return new_str;
}
console.log(vowelDots("hello i am yassine"));
