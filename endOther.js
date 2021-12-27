function endOther(a, b){
  let alower = a.toLowerCase();
  let blower = b.toLowerCase();
  
  if(alower.endsWith(blower) || blower.endsWith(alower))
  {
    return true;
  }
  else
    return false;
}