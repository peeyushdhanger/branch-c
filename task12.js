// //this inside global scope
// this.table = 'window table';
// this.garage = {
//     table: 'garage table'
// };

//  //this inside an object
// let johnsRoom = {
//     table: 'johnstable'
// };
// console.log(johnsRoom.table);

// //this inside method
// let johnsRoom = {
//     table: 'johnstable',
//     cleanTable(){
//         console.log(`cleaning ${this.table}`)
//     }
// };
// johnsRoom.cleanTable();

// //this inside a function
// this.table = 'window table';
// const cleanTable = function(){
//     console.log(`cleaning ${this.table}`)
// };
// cleanTable();

 //call function to rescue
// this.table = 'window table';
// const cleanTable = function(){
//     console.log(`cleaning ${this.table}`)
// };
// cleanTable.call(this);

// // //this inside an inner function
// this.table = 'window table';
// const cleanTable = function(){
//     //let that = this;
//     const innerfunction = function(soap){
//         console.log(`cleaning ${this.table} using ${soap}`)
//     }
//     innerfunction.call(this.soap);
//     innerfunction.bind(this)(soap);
// };

//  //this use in arrow function
// this.tble = 'window table';
// const cleanTable = function(soap){
//     const innerfunction = (soap)=>{
//         console.log(`cleaning ${this.table} using ${soap}`)
//     }
//     innerfunction(soap);
//  };


// //this inside constructor
// let createRoom = function(name){
//     this.table = `${name}s table`
// }
// const jillsRoom = new createRoom('jill');
// const johnsRoom = new createRoom('john');

// //this inside a class
// class createRoom{
//     constructor(name){
//         this.table = `{name}s table`
//     }
//     cleanTable(soap){
//         console.log(`cleaning ${this.table} using ${soap}`)
//     }
// }
// const jillsRoom = new createRoom('jill');
// const johnsRoom = new createRoom('john');

// class student{
//     static count=0;  //static variable to call
//    constructor(name,age,ph_no,marks){
//        this.name=name;
//        this.age=age;
//        this.ph_no=ph_no;
//        this.marks=marks;
//        student.countStudent();
//    }
//    static countStudent(){
//        return(student.count++);     //this is how u access static variable
//    }
//    eligible(){
//        if(this.marks >=40){
//            console.log(`${this.name} age ${this.age} is eligible`);
//        }
//        else if(this.marks<40){
//            console.log(`${this.name} age ${this.age} is not eligible`);
//        }
//    }
// }
// const Pragya=new student('Pragya',18,1234,34);
// const Rashmi=new student('Rashmi',15,2345,35);
// const Sharda=new student('Sharda',16,4567,60);
// const Sadna=new student('Sadna',17,7891,70);
// const Rupali=new student('Rupali',19,3456,80);
// console.log(student.countStudent());
// Pragya.eligible();
// Rashmi.eligible();
// Sharda.eligible();
// Sadna.eligible();
// Rupali.eligible();



// let getA = a => a;
// console.log(getA(1));

// let square = (a)=>{return a*a};
// console.log(square(2));

// var a = 4;
// let square = () =>{return a*a};
// console.log(square());

// let mul = (a, b)=> {return a*b};
// console.log(mul(2, 4));


// //Regular function
// var x =function(){
//     var that = this;
//     this.val = 1;
//     setTimeout(function(){
//         that.val++;
//         console.log(that.val)
//     },1)
// };
// var xx = new x();

// //Fat arro
// var x = function(){
//     this.val = 1;
//     setTimeout(() => { 
//                 this.val++;
//                 console.log(this.val)
//             },1)
//         };
//         var xx = new x();

// //Regular function 
// var x = function(){
//     console.log(arguments[0])
// } ;
// x(1,2,3)  

//Fat arrow function
var x = (...n)=>{
    console.log(n[0])
};
x(1,2,3)






class student{
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPlacementAge(minPlcementAge){
        console.log(this)
        return (minMarks)=>{
            //console.log('inside eligibleForCurrentCompany', this)
            if(this.marks>minMarks && this.age>minPlcementAge){
                console.log(this.name + " is ready for placement")
            }
            else{
                console.log(this.name + " is not ready for placement")
            }
        }
    }
}
const Pragya = new student('Pragya', 26, 75)
const Rajeev = new student('Rajeev', 13, 35)

Pragya.setPlacementAge(18)(40);
Rajeev.setPlacementAge(18)(40);

//Diffrence between fat arrow function and normal function
//normal function look at the current object which is calling the function whereas fat arrow function look at the object which is in the lexical scope means which is right out of this object.
//if you want to access the parent scope than you can't do this normal function so for this you have need to use fat arrow function.