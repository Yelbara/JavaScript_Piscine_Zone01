const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

function get(key)
{
    return(sourceObject[key])
    //return(this.sourceObject[key]) // work also if have relation btween object sourceObject and function get
}

function set(key, value)
{
    sourceObject[key] = value;
    return(sourceObject[key]);
}
console.log("before ubdate");
console.log(get("num"));
console.log("afetr ubdate");
console.log(set("num", 1337));
