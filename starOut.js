function starOut(str){
  let out = "";

  for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) == '*' || (i > 0 && str.charAt(i-1) == '*')) 
    continue;
  if (i < str.length-1 && str.charAt(i+1) == '*') 
    continue;

  out = out + str.charAt(i);
  }

return out;
}