function cToF(celsius)
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
    console.log( cTemp+ "    degree celisus is convered into fahrenheit of:"+ cToFahr+ " degree");
}

function fToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
      console.log( fTemp+ "   degree fahrenheit is convered into celsius of:"+fToCel+" degree");
}
cToF(60);
fToC(45);
