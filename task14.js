//how we do loop elements inside object like array
const obj = {
    key1: 'pragya',
    key2: 'Rajeev',
    key3: 'vernay'
}
console.log(Object.keys(obj));//(key1, key2, key3)
const keyArr = Object.keys(obj);
keyArr.forEach(key =>{
console.log(obj[key])
});
 