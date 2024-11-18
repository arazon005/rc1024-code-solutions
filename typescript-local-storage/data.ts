/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function writeTodos(): string {
  const todosJSON: string = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
  return todosJSON;
}
function readTodos(): Todo[] {
  if (localStorage.getItem('todos-storage')) {
    const newTodos: Todo[] = JSON.parse(
      localStorage.getItem('todos-storage') as string
    );
    return newTodos;
  } else {
    return [];
  }
}
