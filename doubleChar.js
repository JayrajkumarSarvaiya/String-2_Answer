function doubleChar(str){
  const temp ="";
  for(let i=0; i<str.length; i++)
  {
    temp = temp+ str.charAt(i);
    temp = temp+ str.charAt(i);
  }
  return temp;
}