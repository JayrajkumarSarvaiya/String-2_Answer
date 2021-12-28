function prefixAgain(str, n){
  let len = str.length;
  let halfstr = str.substring(0,n);
  
  for(let i=n; i<len; i++)
  {
    if((n+1) <= len)
    {
       let str2 = str.substring(i,n+i);
       if(halfstr == str2)
       {
         return true;
       }
    }
  }
  return false;
}