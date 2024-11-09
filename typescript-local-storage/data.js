'use strict';
let todos = readTodos();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
  return todosJSON;
}
function readTodos() {
  if (localStorage.getItem('todos-storage')) {
    const newTodos = JSON.parse(localStorage.getItem('todos-storage'));
    return newTodos;
  } else {
    return [];
  }
}
