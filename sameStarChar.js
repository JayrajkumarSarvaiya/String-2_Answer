function sameStarChar(str){
  let len = str.length;
  
 for (let i=1; i<len-1; i++) {
  if (str.charAt(i) == '*') {
    if (str.charAt(i-1) != str.charAt(i+1)) 
      return false;
    }
  }
  return true;
}