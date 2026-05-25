// function sameAmount(str, regex1, regex2) // old version
// {
//     let fond1 = str.match(regex1);
//     let fond2 = str.match(regex2);
//     let n1 = 0;
//     let n2 = 0;
//     if(fond1 != null && fond2 != null)
//     {
//         for(let x of fond1)
//             n1 += 1;
//         for(let x of fond2)
//             n2 += 1; 
//     }
//     if(n1 == n2)
//         return true
//     return false;
// }

function sameAmount(str, regex1, regex2) // new version
{
    let fond1 = str.match(regex1) || [];
    let fond2 = str.match(regex2) || [];
    
    return fond1.length == fond2.length;
}

console.log(sameAmount("ababaqaaqqbbba", /a/g, /b/g));