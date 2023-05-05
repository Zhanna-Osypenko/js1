
console.log("Task 1");
const input1 = prompt("Enter number: ");
const num = Number(input1);

if (Number.isNaN(num)) {
    console.log("Not a number")
} else {
     console.log(`10% from you number is ${num*0.1}`);
}
console.log("===================================")
console.log("Task 2");
const input21 = prompt("Enter number 1: ");
const num21 = Number(input21);
const input22 = prompt("Enter number 2: ");
const num22 = Number(input22);
console.log("num21 = ", num21);
console.log("num22 = ", num22);

result2 = num21<num22? num21 : num22;
console.log(`min number is ${result2}`);

console.log("==================================")
console.log("Task 3");
const input3 = prompt("Enter number : ");
const num3 = Number(input3);

if (num3 === 100) {
    result3 = `Number ${num3} = 100`
} else if (num3 > 100) {
    result3 = `Number ${num3} > 100`
} else result3 = `Number ${num3} < 100`
console.log(result3);
console.log("=====================================")
console.log("Task 4");
const inputName = prompt("Enter your name: ");
const name = inputName;
const inputAge = prompt("Enter your age: ");
const age = Number(inputAge);

if (age >= 18) {
    result4 = `Hello, ${name}!`
} else 
if (age < 18 && age > 0) {
    result4 = `Hi, ${name}!`
} else result4 = `Your age is incorrect!`

console.log(result4); 










