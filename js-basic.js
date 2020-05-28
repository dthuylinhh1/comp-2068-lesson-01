console.clear();
// I'm a single line comment looking for love haha
/*
    I'm a multi-line comment who can't catch a break
*/

// jules and me = true;

// Mutable variables ( var that can change)
var dontUseTheseAnymore = true;
let useThisInstead = true;
// they are scoped to blocks {}

// Non-mutable variables (cannot change)
const useTheseAsMuchAsPossible = true;

// Error handling
try{
useTheseAsMuchAsPossible = false;
} catch (e){
    console.log(e.toString());
}

let outsideBlock = "Look at me";
{
    console.log(outsideBlock);
    let insideBlock = "You can't see me";
}

try{
    console.log(insideBlock);
} catch (e){
    console.error(e.toString());
}

if (true){
    let name = "Linh Dao";
}

try{
    console.log(name);
}catch (e){
    console.error(e.toString());
}

// Arrays
// var arr = new Array();
// arr.push(1,3,5);
// console.log(arr);

//better version
const arr = [1,3,5];
console.log(arr);

try{
    arr = "Shaun";
}catch(e){
    console.error(e.toString());
}

arr[1] = 6;
console.log(arr);

// Objects
const obj = {
    name: 'Linh',
    age: 26,
    dob: '1994-11-12'
};
console.log(obj['name']); // dynamically get the property out of here
console.log(obj.name); 

// Control structures - if and switch
let direction; 
if(obj.age > 20){
    direction = "down";
}else{
    direction = "up";
}

console.log("It's all " + direction + " hill from here!");
console.log(`It's all ${direction} hill from here!`); // technically slower
//use of back ticks
console.log(`
    Hello Dave\n
    How are you today.
`);

switch(direction){
    case 'up':
        console.log("Go get em tiger");
        break;
    default:
        console.log("You better rest.");
}

switch (true){
    case 5<7:
        console.log("yep");
        break;
}

// Loops
for (let i = 1; i <=10; i++){
    console.log(i);
}

for (let item of arr){
    console.log(item);
}

for (let key in obj){
    console.log(key);
    console.log(obj[key]);
}

// Functions
function sayHello(name){
    console.log(`Hello, ${name}`);
}
sayHello('Linh');
const helloFunc = sayHello;
console.log(helloFunc);
helloFunc('Kevin');
