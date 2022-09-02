//first example
//Explanation:  When we will call the function then we will get value of function, And as declare at the top value of a, so when we will console.log than it will print value of a .                        


// var a = 3;
// function printName(name){
// console.log(name)
// }
// printName("YAVTECH");
// console.log(a)

//second example
// printName("YAVTECH");
// console.log(a);
//Here printName function defined before function declaration, and Because of Hoisting, you can access variable and function before you have initialize it, or you have put some value in it.  that's why here we are getting function value but value of variable a defined after declaration that's why we are getting undefined.
// var a = 3;
// function printName(name){
// console.log(name)
// }

//Third example
// console.log(printName());
// console.log(a);
//Explanation: Here printName is a normal variable so this variable should declared and defined at the top
// var a = 3;
// var printName = (name) => {
// console.log(name)
// }


//four example
//Explanation: No value assign in function and for variable value is initialize after printing.
console.log(printName);
console.log(a);
var a = 3;
var printName = function (name) {
    console.log(name)
}



//fifth example
// console.log(printName);
// console.log(a);
//Explanation: Whenever we will go at second line console.log(a), then this will throw an error  a is not defined because we don't have reserve memory for a, because here we don't have initialize variable a  means in memory there is no a so that there is no value given for a.
//  // commented var a=5
// var printName = function (name) {
// console.log(name)
// }

