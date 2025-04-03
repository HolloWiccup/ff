const todoList = [
  "купить BMW",
  "выучить JS",
  "полететь в космос",
  "запилить дверь",
];
todoList[0] = "купить Mercedes";

const newTask = "Посадить дерево";
const addTask = todoList.push(newTask);
const firstElement = todoList[0];
const lastElement = todoList[todoList.length - 1];

console.log(todoList);
