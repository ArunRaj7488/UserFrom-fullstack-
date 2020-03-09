
let isFound = false
 console.time("S")
 //console.timeLog("answer time");

 for( let i=0;i<=100000; i++) {
    if(i === 100000){
        isFound = true;
        break;
   }   
}
 
console.timeEnd("S");
console.log(isFound)
