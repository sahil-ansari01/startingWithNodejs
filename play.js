const name = 'Sahil';
let age = 22;
const hasHobbies = true;

age = 23;

const summarizeUser = (userName, userAge, userHobbies) => {
    return (
        'Name is ' + userName + ", age is " + userAge + " and has hobbies: " + userHobbies 
    )
}

// console.log(summarizeUser(name, age, hasHobbies));

const num1 = 5;
const num2 = 5;

const product = (num1, num2) => num1 * num2;

console.log(product(num1, num2));