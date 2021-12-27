function countHi(str){
   let count = 0;
  for(let i=0; i<str.length-1; i++)
  {
    if(str.charAt(i) == 'h' && str.charAt(i+1) == 'i')
    count++;
  }
  return count;
}