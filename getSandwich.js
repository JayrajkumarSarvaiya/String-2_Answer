function getSandwich(str){
    let first = str.indexOf("bread");
    let second = str.lastIndexOf("bread");
  
    if((second != -1 ) && (first!=second))
    {
        return (str.substring(first+5,second)) ;
    }
  else
  {
    return "";
  }
}