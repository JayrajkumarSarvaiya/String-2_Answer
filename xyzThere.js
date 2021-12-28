function xyzThere(str){
  let str1 = 'xyz';
  
  if(str.length >= 3 && (str.substring(0, 3) == str1))
        return true;
          
    for(let i = 1; i < str.length - 2; i++) {
        if(str.charAt(i - 1) != '.' && str.substring(i, i + 3)== str1)
            return true;
    }
                          
    return false;
}