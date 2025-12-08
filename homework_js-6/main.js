// Задача 1

const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false }
]

users.push(
    { name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true }
)

console.log(users)

// Задача 2

function getUserAverageAge(users) {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age / users.length;
    }
    return sum;
}

console.log(getUserAverageAge(users))

// Задача 3

function getAllAdmins(users) {
    console.log(users.find(item => item.isAdmin === true))
}

console.log(getAllAdmins(users))

// Задача 4

function first(arr, n) {
    if (n === undefined) {
        return [arr];
    }
    
    if (n === 0) {
        return ;
    }
    
    if (arr.length <= n) {
        console.error(`Не может быть больше длины массива ${arr.length}`);
        return;
    }
    
    return arr.slice(0, n);
}

console.log(first(users, 5))