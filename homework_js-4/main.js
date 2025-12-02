// Задача 1

function calculateFinalPrice(price, discount, tax) {
    return price - (price / 100 * discount) + (price - (price / 100 * discount)) * tax
}

console.log(calculateFinalPrice(100, 10, 0.2))

// Задача 2

const username = prompt(`Введите логин`, `admin`);
const password = prompt(`Введите пароль`, 123456);

function checkAccess(username, password) {
    if (username === "admin" && password === "123456") {
        return `Доступ разрешён`;
    }
    else {
        return `Доступ запрещён`;
    }
}

console.log(checkAccess(username, password))

// Задача 3

const time = prompt(`Который час? (от 0 до 23)`, 7);

const getTimeOfDay = time => {
    if (time >= 0 && time < 6) {
        return `Ночь`;
    }
    else {
        if (time >=6 && time < 12) {
            return `Утро`;
        }
        else {
            if (time >= 12 && time < 18) {
                return `День`;
            }
            else {
                if (time >= 18 && time < 24) {
                    return `Вечер`;
                }
                else {
                    return `Некорректное время`;
                }
            }
        }
    }
}

console.log(getTimeOfDay(time))

// Задача 4

function findFirstEven(start, end) {
    if ((end - start) % 2 === 0) {
        return `Первое чётное число в диапазоне от ${start} до ${end} будет ${start}`;
    }
    else {
        return `Первое чётное число в диапазоне от ${start} до ${end} будет ${Number(start) + 1}`;
    }
}

console.log(findFirstEven(5, 10))