"use strict";

const todoKeys = {
    id: 'id',
    text: 'text',
    // 
    day: 'day',
    // 
    is_completed: 'is_completed',
}

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

// 
const errTodoNotFoundDay = todoDay => `Todo with day ${todoDay} not found`;
// 

const getNewTodoId = todos => {
    return (
        todos.reduce((maxId, todo) => {
            return Math.max(maxId, todo[todoKeys.id]);
        }, 0) + 1
    );
};

const createTodo = (todos, text) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text,
        // 
        [todoKeys.day]: day,
        // 
        [todoKeys.is_completed]: false,
    };
    todos.push(newTodo);
    return newTodo;
}

const completeTodoById = (todos, todoId) => {
    const todo = todos.find(todo => todo[todoKeys.id] === todoId);
    if (todo === undefined) {
        console.error(errTodoNotFound(todoId));
        return null
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
};

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
    if (todoIndex === -1) {
        console.error(errTodoNotFound(todoId));
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
};

////////////////

const createTodoDay = (todos, day) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.day]: day,
        [todoKeys.is_completed]: false,
    };
    todos.push(newTodo);
    return newTodo;
}

const completeTodoByDay = (todos, todoDay) => {
    const todo = todos.find(todo => todo[todoKeys.day] === todoDay);
    if (todo === undefined) {
        console.error(errTodoNotFoundDay(todoDay));
        return null
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
};

const deleteTodoByDay = (todos, todoDay) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKeys.day] === todoDay);
    if (todoIndex === -1) {
        console.error(errTodoNotFoundDay(todoDay));
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
};