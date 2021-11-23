//define a  function 
function basic() { 
    console.log("function basic") 
 } 
 //call the function 
 basic()

//  Returning functions

function returning() { 
    return "function Returning"
 } 
 //call the function 
console.log(`Returning : ${returning()}`)

//function parameters + Default parameters 
function person(fristname,lastname = "Panchat",... other) { 
    console.log(fristname,lastname,other) 
 } 
 person("Burin")

//function parameters +  Rest Parameters
function person(fristname,lastname,... other) { 
    console.log(fristname,lastname,other) 
 } 
 person("Burin","Panchat","Dev")

//Anonymous Function

var fullname = function(){return "Burin Panchat"}
console.log(fullname())

// Recursion Function
function factorial(num) { 
    if(num <= 0) { 
       return 1; 
    } else { 
       return (num * factorial(num-1)  ) 
    } 
 } 
 console.log(factorial(3)) // 3*2*1 = 6

 // Lambda Functions or Arrow functions

var fullname = ()=>{return "Burin Panchat"} // single parameter can not ()
console.log(fullname())

// hoist function
person();  
function person() { 
   console.log("Burin Panchat"); 
} 

