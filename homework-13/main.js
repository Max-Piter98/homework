const userName = "Jason";
function hello(name) {
    return "Hello, " + name;
}
const result = hello(userName);
console.log(result);

// ======================================================================

const numbers = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
function numberGreatThatTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(numbers[i])
        }
    }
    return 'End'
}
console.log(numberGreatThatTen(numbers))

// ======================================================================

function sumNumbers(firstNumber, secondNimber, operator) {
    if (operator === 'plus') {
        return firstNumber + secondNimber
    }
    if (operator === 'minus') {
        return firstNumber - secondNimber
    }
    if (operator === 'multiply') {
        return firstNumber * secondNimber
    }
    if (operator === 'divide') {
        return firstNumber / secondNimber
    }
}
console.log(sumNumbers(-5, 10, 'plus'))
console.log(sumNumbers(-5, 10, 'minus'))
console.log(sumNumbers(-5, 10, 'multiply'))
console.log(sumNumbers(-5, 10, 'divide'))