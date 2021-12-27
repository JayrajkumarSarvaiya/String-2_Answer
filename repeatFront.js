function repeatFront(str, n){
  let output = "";
  for(let i = n; i > 0; i--) 
  {
    output += str.substring(0, i);
  }
  return output;
}