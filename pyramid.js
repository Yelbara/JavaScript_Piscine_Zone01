function generate_space(nb)
{
    let str = "";
    for(let i = 0; i < nb; i++)
    {
        str += " " ;
    }
    return str;
}

function pyramid(str, nb)
{
    let max_lenght = ((nb - 1 )* 2) + 1;
    let i = 0;
    let j  = -1;
    for(;i < nb; i++)
    {
        let new_str = "";
        j  += 2;
        let how_mach_sp = ((max_lenght - j) / 2);
        new_str += generate_space(how_mach_sp);
        for(let x = 0; x < j; x++)
        {
            new_str += str;
        }
        new_str += generate_space(how_mach_sp);
        console.log(new_str);
    }
}

pyramid("*", 5);