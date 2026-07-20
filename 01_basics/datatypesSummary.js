/*
Primitive :
7 types : String , number , boolean, null, undefined, symbol ,BigInt
 


Reference (Non Primitive) :
Arrays, Objects, Functions
*/

const id = Symbol('122')
const id2 = Symbol('122')
console.log(id == id2);
const bigNumber = 12545635256446551553154543988695323n
console.log(bigNumber)
const arr = ["Rohit","Kohli","Dhawan"]
let myObj = {
    name : "Piyush",
    age : 20,
    isStudent : true
}
console.log(myObj.name)
myObj.branch = "ece"
console.log(myObj["branch"])
delete myObj.branch
const sub = function(a,b){
    return a-b
}
console.log(sub(3,4))
const mult = (a,b) => a*b
console.log(mult(2,4))


/*
function add(a, b) {
  return a + b;
}  function declaration 
Hoisted — you can call add() before this line in the code, and it still works, because JS loads the whole function into memory before execution starts. 
javascript
console.log(add(2, 3));  // works! prints 5
function add(a, b) { return a + b; }
Has its own this binding (depends on how it's called).
Can be named and shows up nicely in stack traces during debugging.



Function Expression
javascript
const subtract = function(a, b) {
  return a - b;
};
A function assigned to a variable. Not hoisted the same way — the variable subtract is hoisted (as undefined), but the function assignment happens only when execution reaches that line.
javascript
console.log(subtract(5, 2));  // ❌ TypeError: subtract is not a function

const subtract = function(a, b) { return a - b; };
Also has its own this binding, same as a declaration.
Useful when you want to conditionally define a function, or pass it around as a value immediately.


Arrow Function
javascript
const multiply = (a, b) => a * b;
Shorthand syntax, also not hoisted (same variable rules as function expressions).
No implicit return needed if it's a single expression — (a, b) => a * b automatically returns a * b. If you use {}, you need an explicit return:
javascript
const multiply = (a, b) => { return a * b; };  // same result, longer form
Key difference: does NOT have its own this. It inherits this from the enclosing scope. This matters a lot in object methods and callbacks:

const obj = {
  name: "test",
  regular: function() { 
    setTimeout(function() { console.log(this.name); }, 100);  // undefined (this = global/undefined)
  },
  arrow: function() {
    setTimeout(() => { console.log(this.name); }, 100);  // "test" (this = obj, inherited)
  }
};

Quick summary table:

                    Declaration 	    Expression  	    Arrow
Hoisted	            ✅ Yes	            ❌ No	        ❌ No
Own this	        ✅ Yes	            ✅ Yes	        ❌ No (inherited)
Can be constructor	✅ Yes	            ✅ Yes	        ❌ No
Syntax	Verbose	Verbose	Concise
*/

//primitive (stack)  && non-primitive (heap)
