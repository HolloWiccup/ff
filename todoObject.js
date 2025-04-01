const todoList = {
  list: {
    "Выучить JS": "В процессе",
    "Купить BMW": "Нужно сделать",
    "Вывести сайт в топ": "Готово",
  },

  taskStatus: {
    statusTodo: "Нужно сделать",
    statusReady: "Готово",
    statusProcess: "В процессе",
  },

  addTask(task) {
    this.list[task] = this.taskStatus.statusTodo;
  },
  deleteTask(task) {
    delete this.list[task];
  },
  changeStatus(task, status) {
    this.list[task] = status;
  },
  showList() {
    console.log(this.list);
  },
};

todoList.addTask("запилить двери");
todoList.deleteTask("Выучить JS");
todoList.changeStatus("Купить BMW", todoList.taskStatus.statusReady);
todoList.showList();
