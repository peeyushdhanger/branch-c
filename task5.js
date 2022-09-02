// let var and const
//console.log(a); //Reference Error because here we are trying to access variable in temporal deadzone
//console.log(b); // Undefined because of hoisting variable are save in global memory but value is not assign
//let a =5;// here a is assign memory space in a seprae space.
//var b =6;//here b is assign memory space in a global space.
//console.log(b);// 6 as b are declared above with value.


// console.log(a);//Undefined because of hoisting variable are save in global memory but value is not assign
// var a = 5;
// console.log(b)// Reference Error: b is not defined because here is no value assign for b;



// let a = 5;
// var b = 6;
// console.log(this.b);//6 in global execution context this===window, and here b are attached with window object because b are saved in global space. and in global space, memory are alocated for b==6;
// console.log(window.b)// 6 b are attached with window object because b are saved in global space. and in global space, memory are alocated for b==6;
// console.log(window.a)// undefined because a are saved in seprate space
// console.log(this.a);// undefined because a are saved in seprate space not global space.


// let a =5;
// let a = 6; // syntax error because duplicate declaration of let variable


// let a =6;
// const b; //Syntax Error const variable should be initialized as well as declared together

var obj = {
    a:1,
    b:2,
    c:3
}
var arr = [1,2]
// for(var i=1; i<arr.length; i++){
//     arr[i];
// }
//console.log(Object.keys(obj));
var arrofKeys = Object.keys(obj);
arrofKeys.forEach(key =>{
    console.log(obj[key])
})
