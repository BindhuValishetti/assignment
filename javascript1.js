function maxof3(a,b,c)
 {
  max = 0;
  if (a > b)
  {
    max = a;
  } else
  {
    max = b;
  }
  if (c > max)
  {
    max = c;
  }
  return max;
}

console.log(maxof3(1,0,1));
console.log(maxof3(0,-10,-20));
console.log(maxof3(1000,510,440));
