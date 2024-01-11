const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
console.log(fruits.map( (fruit) => {
    fruit === ' ' ?  'empty string' : fruit
}))

// Spread operator

const hobbies = ['Sports', 'Cooking'];

const copiedArr = [...hobbies];

console.log(copiedArr)

// rest

const toArray = (...args) => {
    return args;
}

console.log(1,2,3,4);

// Destructuring

const person = {
    name: 'Sahil',
    age: '23',
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age} = person;
console.log(name, age);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2)