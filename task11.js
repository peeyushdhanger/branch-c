// a()
// b()
// function a(){
// console.log('inside a');
// }
// var b = function (){
// console.log('inside b');
// }

//function declaration
// function a(){
//     console.log("Pragya")
// }

//function expression
// var b = function(){
//     console.log("b called")
// }

//anonymous function
// function(){
//     console.log("Pragya")
// }

//currying
function findAge(age){
age = age+20;
return(total)=>{
    return(total1)=>total+age+total1;
}
}
const fun = findAge(15);
console.log(fun(2)(5));

