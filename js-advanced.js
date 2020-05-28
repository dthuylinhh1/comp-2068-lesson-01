console.clear();
// Destructuring
const arr = ['The Crow', 'The Cranberry', 'Cheesecake'];
const [movie, music, food] = arr;
console.log(movie, music, food);
console.log(`My favourite movie is the ${movie}`);

const linh = {
    name: "Linh Dao",
    age: 26,
    dob: (new Date(1994, 10, 12).toString())
};
console.log(linh);
// Object destructuring
const {name, age, dob} = linh;
console.log(`Your name is ${name} and you are ${age} years old. You were born on ${dob}.`);

// Default values
const tim = {
    alias: 'Super Bob'
}
const {alias, aka = 'Tim', race = 'unknown'} = tim;
console.log(alias, aka, race);

// Aliasing destructured property names
const {name: my_name, age: my_age, dob:my_dob} = linh;
console.log(my_name,my_age, my_dob);

// Spread Operator:
const temps = [98, 67, 35];
const tempChanges = [...temps, 89, 65];
console.log(tempChanges);

const person = {name: 'Bob', spouse: 'Karen', children: 4};
const hobbies = {fav: 'Walking the dogs', secFav: 'Food'};
const completePerson = {...person, hobbies:{...hobbies}};
console.log(completePerson);

function sayHello (name, age, dob){
    console.log(`Hello, ${name}. You are ${age} years old. And ${dob}.`);
}
const personArr = ['Linh', 26, '11-12-1994'];
sayHello(...personArr);

function sayGoodbye({name, age, dob}){
    console.log(this); 
    console.log(`Goodbye, ${name}. ${age} ${dob}`);
}

sayGoodbye(linh);

// Arrow functions
const myFirstArrowFunc = () => {
    console.log("I'm an arrow function");
};
myFirstArrowFunc();

const func2 = (param1, param2) => {
    console.log(param1,param2);
};
func2('arg1', 'arg2');

const func3 = param => {
    console.log(param);
};
func3('urg');

const func4 = param => console.log(param);
func4('wowww');
