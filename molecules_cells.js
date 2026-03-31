function RNA(str)
{
    let new_str = "";
    for(c of str)
    {
        if(c == 'A')
            new_str += 'U';
        if(c == 'T')
            new_str += 'A';
        if(c == 'C')
            new_str += 'G';
        if(c == 'G')
            new_str += 'C';
    }
    return new_str;
}

console.log(RNA("ATCG"));