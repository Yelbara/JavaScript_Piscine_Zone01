function ionOut(str)
{
    const words = str.split(" ");
    let i = 0;
    for(let vr of words)
    {
        vr = vr.replace("tion", "t");
        words[i] = vr;
        i += 1;
    }
    return words;
}

console.log(ionOut("million caution fashion"));