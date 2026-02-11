function Sign (num) 
{
    if(num == 0)
        return 0;
    return num > 0 ? 1 : -1;
}

function sameSign(num1, num2)
{
    if(Sign(num1) == Sign(num2))
        return true;
    return false;
}