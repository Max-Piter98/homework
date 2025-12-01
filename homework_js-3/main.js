// Задача 1

for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i)
}

// Задача 2

const number = +prompt(`Вычислить факториал числа`, 1);

let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
    console.log(`Факториал числа ` + number + ` равен ` + factorial)
}

// Задача 3

let board = "";

for (let i = 1; i <= 8; i++) {
    let row = "";
    for (let j = 1; j <= 4; j++) {
        board += "#_";
    }
    board += "\n";
}

console.log(board)