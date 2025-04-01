const todoList = {
  "Выучить JS": "В процессе",
  "Купить BMW": "Нужно сделать",
  "Вывести сайт в топ": "Готово",
};

const taskStatus = {
  statusTodo: "Нужно сделать",
  statusReady: "Готово",
  statusProcess: "В процессе",
};

function addTask(task) {
  todoList[task] = "Нужно сделать";
}
function deleteTask(task) {
  delete todoList[task];
}
function showList(todoList) {
  console.log(todoList);
}
function changeStatus(task, status) {
  todoList[task] = status;
}
showList(todoList);
addTask("Написать код");
deleteTask("Купить BMW");
changeStatus("Выучить JS", taskStatus.statusTodo);
showList(todoList);
