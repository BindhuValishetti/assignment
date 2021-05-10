function calculate_age(y,m,d) {
  var dob=new Date(y,m,d);
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    var res= Math.abs(age_dt.getUTCFullYear() - 1970);
    if(res>=18||res<=44)
    {
      open("https://selfregistration.cowin.gov.in/");
    }
}
console.log(calculate_age(1997,09,01))
