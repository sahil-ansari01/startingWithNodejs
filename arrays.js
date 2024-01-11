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
