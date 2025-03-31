const todoList = {
  "Выучить JS": "В процессе",
  "Купить BMW": "Нужно сделать",
  "Вывести сайт в топ": "Готово",
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
function changeStatus(task, taskStatus) {
  todoList[task] = taskStatus;
}
showList(todoList);
addTask("Написать код");
deleteTask("Купить BMW");
changeStatus("Выучить JS", "Готово");
showList(todoList);
