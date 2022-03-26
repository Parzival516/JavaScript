function toCelsius(f)
{
    var result=((f-32)*(5/9))
    return result
}

function toFarenheit(c)
{
    var result=(c*9/5)+32
    return result
}

var myTemp=toCelsius(100)
myTemp=toFarenheit(100)
console.log("My temp in celsius is",myTemp,"degree celsius")