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