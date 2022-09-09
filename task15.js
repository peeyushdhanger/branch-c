// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 1000)
// console.log('d')


// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 0)
// console.log('d')


// console.log('a');
// console.log('b');
// setTimeout(() => console.log('e'), 1000)
// setTimeout(() => console.log('c'), 0)
// console.log('d')

//Spread operator for object
// const obj1={
//     key1: 'value1',
//     key2: 'value2'
// }
// //const obj2 = obj1;
// //const obj2 = {...obj1};//spread operator there is obj1 is new object for reference this will update value for obj2 but obj1 will same
// //obj2.key1 = 'value100';
// //const obj2 = {...obj1, key1: 'value100'};//this is second advantage of spread operator make syntax short here you have avoid to write line just above this
// const obj2 = {...obj1, key1: 'value100', key3: 'value10'};//third advantage you can add new key
// console.log(obj1);
// console.log(obj2);

//spread operator for array
// const arr1 = [1,2]
// const arr2 = [3,4]

// const arr3 = [...arr1, ...arr2]
// console.log(arr3);

// const arr1 = [{a:1}, {b:2}, {c:3}]
// const arr2 = [3,4];
// const obj = {d:2}
// const arr3 = [...arr1, ...arr2, {...obj}]
// console.log(arr3);


//some example with object.
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  //Check the result object in the console:
  console.log(myUpdatedVehicle);


  //some example with array.
  const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);