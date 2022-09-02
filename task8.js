// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     y()
//     }
//     x();

// function x(){
//     let a = 10;
//      function y(){
//     console.log(a);
//     }
//      return y();
//     }
//     x();


// function x(){
//     let a = 10;
//     function y(){ 
//     console.log(a);
//     }
//     return y;
//     }
//     console.log( x());

// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }
//     const z = x()
//     console.log(z());


function x(){
    let a = 10;
    function y(){
    console.log(a);
    }
    a= 50;
    return y;
    }
    const z = x()
    console.log(z());
    
    
    
    
    
    