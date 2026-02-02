const s_earth = 31557600;
const s_mercury  = 0.2408467 * 31536000;
const s_venus  = 0.61519726 * 31536000;
const s_mars =1.8808158 * 31536000;
const s_jupiter  = 11.862615 * 31536000;
const s_saturn  =  29.447498 * 31536000;
const s_uranus  = 84.016846 * 31536000;
const s_neptune  = 164.79132 * 31536000;

function dogYears(name_plane, age_s_doge)
{
    if(name_plane == "earth")
        return (((age_s_doge / s_earth) * 7).toFixed(2))
    else if(name_plane == "mercury")
        return (((age_s_doge / s_earth) * (7 * 0.2408467)).toFixed(2))
    else if(name_plane == "venus")
        return (((age_s_doge / s_earth) * (7 * 0.61519726)).toFixed(2))
    else if(name_plane == "mars")
        return (((age_s_doge / s_earth) * (7 * 1.8808158)).toFixed(2))
    else if(name_plane == "jupiter")
        return (((age_s_doge / s_earth) * (7 *  11.862615)).toFixed(2))
    else if(name_plane == "saturn")
        return (((age_s_doge / s_earth) * (7 * 29.447498)).toFixed(2))
    else if(name_plane == "uranus")
        return (((age_s_doge / s_earth) * (7 * 84.016846)).toFixed(2))
    else if(name_plane == "neptune")
        return (((age_s_doge / s_earth) * (7 * 164.79132)).toFixed(2))
    // else if()
    
}
console.log("age of dog in is " + dogYears("earth", 1000000000));
console.log("age of dog in is " + dogYears("mars", 1000000000));
console.log("age of dog in is " + dogYears("saturn", 1000000000));


