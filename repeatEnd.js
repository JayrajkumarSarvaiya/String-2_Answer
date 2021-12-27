function repeatEnd(str, n){
let end;
let result = "";
 
end = str.substring(str.length - n, str.length);
 
for(let i = 0; i < n; i++) {
result += end;
}
return result;
}