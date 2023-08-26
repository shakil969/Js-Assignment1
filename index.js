
         //    problem(1)

    function checkDataTypes(datacheck,datacheck2,datacheck3){  
    if(typeof(datacheck)=="string"){
        console.log("String Data Type");
    }
    else if(typeof(datacheck)=="number"){
         console.log("Number Data Type");
    }
    else if(typeof(datacheck)=="boolean"){
         console.log("Boolean Data Type");
    }

    if(typeof(datacheck2)=="string"){
        console.log("String Data Type");
    }
    else if(typeof(datacheck2)=="number"){
         console.log("Number Data Type");
    }
    else if(typeof(datacheck2)=="boolean"){
         console.log("Boolean data Type");
    }

    if(typeof(datacheck3)=="string"){
        console.log("String Data Type");
    }
    else if(typeof(datacheck3)=="number"){
         console.log("Number Data Type");
    }
    else if(typeof(datacheck3)=="boolean"){
         console.log("Boolean Data Type");
    }
    
    else{
     console.log("invalid Data type");
    }
    }
    checkDataTypes( 22,"text", false,)
   
     //    problem(2)

     function checkLeapYear(year) {  
          if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            console.log(` ${year} is a leap year`);
          }   
        else {  
              console.log("is not  leap year");
            }
        }
     checkLeapYear(2016)

      //    problem(3)

    function evalNmubers(a,b,operations){
    if (operations=="add"){
        console.log(a+b); 
    }
    else if(operations=="subtract"){
     console.log(a-b);
    }
    else if(operations=="multiply"){
     console.log(a*b);
    }
    else if(operations=="divide"){
     console.log(a/b);
    }
    else if(operations=="modulus"){
     console.log(a%b);
    }
    else{
        console.log("invalid operations");
    }
    }
    evalNmubers(20,10,"multiply")  

     //    problem(4)

     function findLargest(a,b,c){
        if(a>b && a>c){
         console.log(`Frist Largest Number=${a}`);
        }
        else if (b>a && b>c){
            console.log(` Frist Largest Number=${b}`);
        }
      else  {
        console.log(` Frist Largest Number=${c}`);
      }
     
     }   
     findLargest(90,100,200)





















