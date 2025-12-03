// Задача 1

const person = {
    name: "Макс",
    age: 27,
    profession: "Художник"
};

console.log(person)

// Задача 2

const object = {

};

function isEmpty(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

console.log(isEmpty(object))

// Задача 3

const object1 = {
    title: "Тема",
    description: "Описание",
    isCompleted: true
}

const modifications = {
    name: "Jason"
}

function cloneAndModify(object1, modifications) {
    const task = { ...object1, ...modifications };
    task.title = "Раздел";
    return task
}

for (let key1 in cloneAndModify) {
    console.log(cloneAndModify[key1]);
}

console.log(cloneAndModify(object1, modifications))

// Задача 4

const myObject = {
    method1() {
        console.log(`Метод 1 вызван`);
    },
    method2() {
        console.log(`Метод 2 вызван`);
    },
    property: `Это не метод`
};

function callAllMethods(obj) {
    const methods = Object.keys(obj).filter(key => 
        typeof obj[key] === 'function'
    );
    
    methods.forEach(method => {
        try {
            obj[method].call(obj);
        } catch (error) {
            console.error(`Это не метод`);
        }
    });
}

console.log(callAllMethods(myObject))