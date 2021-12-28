function mixString(a, b){
  let alen = a.length;
  let blen = b.length;
  
  const temp ="";
  let result = (alen > blen ? alen : blen)
  for(let i=0; i<result; i++)
  {
    temp = temp+ a.charAt(i);
    temp = temp+ b.charAt(i);
  }
  return temp;
}