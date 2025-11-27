// Задача 1

const number = +prompt(`Проверим ваше число на чётность/нечётность`, 0);
const remainder = number % 2;

if (remainder === 0) {
    console.log(`Чётное число`);
} else {
    console.log(`Нечётное число`);
}

// Задача 2

const age = +prompt(`Введите ваш возраст, посчитаем скидку`, 0);
const discount = age < 18 ? `Скидка 10%` : age >= 18 && age <= 65 ? `Скидка 20%` : age > 65 && age < 100 ? `Скидка 30%` : `Вы ещё живы?!`;

console.log(discount)

// --------------------------------------------------------------------------------------

// const discount_1 = age < 18;
// const discount_2 = age >= 18 && age <= 65;
// const discount_3 = age > 65 && age < 100;

// switch (age) {
//     case discount_1:
//         console.log(`Скидка 10%`);
//         break;
//     case discount_2:
//         console.log(`Скидка 20%`);
//         break;
//     case discount_3:
//         console.log(`Скидка 30%`);
//         break;
//     default:
//         console.log(`Вы ещё живы?!`);
// }

// Задача 3

const username = prompt(`Введите логин`, `admin`);
const password = prompt(`Введите пароль`, 123456);
const entrance = (username === 'admin' || username === 'user') && password === '123456' ? `Доступ разрешён` : `Доступ запрещён`;

console.log(entrance)

// Задача 4 

const mass = prompt(`Введите вес посылки`, 2);
const type = prompt(`Введите тип доставки`, `Стандарт`);
const price_1 = 5
const price_2 = 10
const price_3 = 15

const result_1 = mass <= 0 ? `Некорректный вес посылки` : mass > 0 && mass < 1 ? price_1 : mass >= 1 && mass <= 5 ? price_2 : price_3;

switch (type) {
    case 'Стандарт':
        console.log(Number(result_1 * 1) + `$`);
        break;
    case 'Экспресс':
        console.log(Number(result_1 * 1.5) + `$`);
        break;
    case 'Премиум':
        console.log(Number(result_1 * 2) + `$`);
        break;
    default:
        console.log(`Некорректный тип доставки`);
}