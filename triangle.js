function triangle(str, nb)
{
    let i = 0
    for(;i < nb ; i++)
    {
        let new_str = "";
        for(let j = 0; j <= i ; j++)
        {
            new_str += str;
        }
        console.log(new_str);
    }
}

triangle("*", 5);