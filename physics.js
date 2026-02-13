
function check_formula_v1(obj)
{
    if(obj.f != undefined && obj.m != undefined && obj.m != 0)
        return obj.f / obj.m;
    return false;
}

function check_formula_v2(obj)
{
    if(obj.Δv != undefined && obj.Δt != undefined && obj.Δt != 0)
        return obj.Δv / obj.Δt;
    return false;
}

function check_formula_v3(obj)
{
    if(obj.d != undefined && obj.t != undefined && obj.t != 0 )
        return (2 * obj.d) / (obj.t * obj.t);
    return false;
}

function getAcceleration(obj)
{
    if(check_formula_v1(obj))
        return check_formula_v1(obj);
    if(check_formula_v2(obj))
        return check_formula_v2(obj);
    if(check_formula_v3(obj))
        return check_formula_v3(obj);
    return "impossible";
}

const obj1 = 
{
  f: 10,
  m: 0,
  Δv: 100,
  Δt: 50,
  t:1,
  d: 10
}

console.log(getAcceleration(obj1)); // 2