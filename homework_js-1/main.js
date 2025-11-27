// Задача 1

const firstName = 'Макс';
const lastName = 'Питерцев';
const isStudent = true;

// Задача 2

const age = '27';
const currentYear = '2025';
const birthYear = Number(currentYear - age);

// Задача 3

console.log(`Меня зовут ` + firstName + ` ` + lastName + `, мне ` + age + ` лет. Я ученик курса: ` + isStudent);

// Задача 4 

let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean('');
let result = a + b + c + d + e;

// 123456789falsefalse

console.log(result);