// let name = {
//     firstName:"pragya",
//     lastName:"pal"
// }
// let printFullName = function(hometown, state){
//     console.log(this.firstName + " " + this.lastName + " " + "from "  +  hometown + "," + state + " ")
// }
// //function call
// printFullName.call(name, "Jaipur", "Rajasthan");
// let name2 = {
//     firstName:"Surbhi",
//     lastName:"pal"
// }
// //function borrowing
// printFullName.call(name2, "Jaipur" , "Rajasthan");
// //apply method
// printFullName.apply(name2, ["Jaipur" , "Rajasthan"]);
// //bind method
// let printMyName = printFullName.bind(name2, "Jaipur" , "Rajasthan");
// console.log(printMyName);
// printMyName();

// let Student = {
//     name: "Mohan",
//     age:20
// }
// let printAge =function(){
//     console.log(this.name+ " " + " age is " + this.age)
// }
// let age = printAge.bind(Student);
// //console.log(age);
// age();

//currying function use of bind way
let multiply1 =function(x, y){
        console.log(x * y);
    }
let multiplyByTwo1 = multiply1.bind(this, 2);
multiplyByTwo1(3);

let multiplyByThree1 = multiply1.bind(this, 2);
multiplyByTwo1(10);

//currying function use of closure way
let multiply =function(x){
    return function(y){
        console.log(x * y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByTwo(10);



