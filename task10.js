// function y(){
//     setTimeout(() => console.log(a), 1000)
//     console.log('Done Coding')
//     }
//     y();

// function y(){
//     setTimeout(() => console.log(a), 0)
//     console.log('Done Coding')
//     }
//     y();

// function y(){
//     for(var i=1;i<6;i++){
//     setTimeout(() => console.log(i ), i * 1000)
//     }
//     console.log('Done Coding')
//     }
//     y();

// function y(){
//     for(let i=1;i<6;i++){
//     setTimeout(() => console.log(i ), i * 1000)
//     }
//     console.log('Done Coding')
//     }
//     y();    

const name = (arr)=>{
    var count = 0;
    return ()=>{
        console.log('Hello '+ arr[count])
        count++;
}
}
let fun = name(["Ram","Shyam"]);
fun()// Print Hello Ram
fun()//print Hello Shyam
    
    