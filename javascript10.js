function vowels(str1)
{
  str1=str1.toLowerCase();
  var A_count=0;
  var E_count=0;
  var I_count=0;
  var O_count=0;
  var U_count=0;
  for(var x=0;x<str1.length;x++)
  {
    if(str1[x]=='a')
        A_count++;
    else if(str1[x]=='e')
          E_count++;
    else if(str1[x]=='i')
          I_count++;
    else if(str1[x]=='o')
          O_count++;
    else if(str1[x]=='u')
          U_count++;
        }
      console.log(" No of A's:" +A_count);
      console.log(" No of E's:" +E_count);
      console.log(" No of I's:" +I_count);
      console.log(" No of O's:" +O_count);
      console.log(" No of U's:" +U_count);
  }
  vowels("hi this is bindu");
