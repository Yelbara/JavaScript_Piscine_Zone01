

const planes = {
    earth : 31557600,
    mercury  : 0.2408467,
    venus  : 0.61519726,
    mars :1.8808158,
    jupiter  : 11.862615,
    saturn  :  29.447498,
    uranus  : 84.016846,
    neptune  : 164.79132
}

function dogYears(name_plane, age_s_doge)
{
    if(name_plane == "earth")
        return (((age_s_doge / planes.earth) * 7).toFixed(2))
    else
        return (((age_s_doge / planes.earth) * (7 * planes[name_plane])).toFixed(2))
}
console.log("age of dog in is " + dogYears("earth", 1000000000));
console.log("age of dog in is " + dogYears("mars", 1000000000));
console.log("age of dog in is " + dogYears("saturn", 1000000000));


