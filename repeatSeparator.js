function repeatSeparator(word, sep, count){
  let alen = word.length;
  let blen = sep.length;
  let str = "";
  
  for(let i=0; i<count; i++)
  {
    if(i<count-1)
    {
      str = str + word + sep;
    }
    else
    {
      str = str + word;
    }
  }
  return str;
}