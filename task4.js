//lexical environment scope and scope chain
// var a = 2;
// var c = 2;
// function b(){

// var x = 2;
// var c = 4
// console.log(c)// nothing because here we are not calling function after call function it will print 4.
// }
//console.log(a); //2 value of a as declared in global execution context, and if there is nothing in front of a means a is global variable
//console.log(this.a);//2 value of a as declared in global execution context
//console.log(this.c)//2 this represent for global variable that's why value of c is taken from global variable
// console.log(this.x)// undefined because this represent for global variable but x is not global variable
//console.log(window.a) //2  window is also represent for global variable
//console.log(window.x) //undefined because window represent for global variable but x is not global variable
//console.log(b()); //undefined Nothing is defined in code section


//  function abc() {
//     console.log(a);
//     }
//     var a = 7;
//     abc();



//  function abc() {
//     console.log(a);
//     }
//     abc();  
//     var a = 7;


function outerfunction() {
   console.log(a);//7 due to scope 
   var c = 10;
   innerfunction();
   function innerfunction() {
      console.log(b);//3 here first will try to findout in local scope so there is no b than it will comes out and will go one step up so it will find out b==3; 
      console.log(c);//10 here firt will try to findout in local scope so there is no c than it will comes out and will go one step up so it will find out c==10; 
   }
   }
   var a = 7;
   var b =3
   outerfunction();



// function outerfunction() {
//    console.log(a);//undefined because now a is not defined
//    var a = 10; 
//    innerfunction();
//    function innerfunction() {
//       console.log(a);//10 here firt will try to findout in local scope so there is no a than it will comes out and will go one step up so it will find out a==10; 
//       console.log(window.a);//7 window means in global scope so in global scope value of variable a is 7
//       console.log(this.a);//7
//       //in above line this is nothing but a current object which is invoking function(innerfunction(); this is the function and if this is invoke by like obj.ineerfunction() means invoke by a object which is obj than this will refer to the  this so there is no object which is invoking the function so it will start to see in the global scope what is the value of this so normally in global scope this===widdow so window.a will similar to this.a)
//    }
// }
// var a = 7;
// var b = 3
// outerfunction();









