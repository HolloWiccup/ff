const todo = {
  list: [],
  LOCALSTORAGE_KEY: 'todo-do-do',
  STATUS: {
    IN_PROGRESS: 'in progress',
    DONE: 'done',
  },
  PRIORITY: {
    HIGH: 'high',
    LOW: 'low',
  },

  init() {
    const storageList = localStorage.getItem(this.LOCALSTORAGE_KEY);
    if (!storageList) return;
    this.list = JSON.parse(storageList);
  },

  addTask(text, priority) {
    const task = {
      id: text + Date.now(),
      text,
      priority,
      status: this.STATUS.IN_PROGRESS,
    };
    this.list.push(task);
    this.saveStorage();
  },

  saveStorage() {
    const json = JSON.stringify(this.list);
    localStorage.setItem(this.LOCALSTORAGE_KEY, json);
  },

  removeTask(id) {
    const newList = this.list.filter((item) => {
      if (item.id !== id) return item;
    });
    this.list = newList;
    this.saveStorage();
  },

  changeStatus(id, status) {
    const newList = this.list.map((item) => {
      if (item.id === id) item.status = status;
      return item;
    });
    this.list = newList;
    this.sortList();
    this.saveStorage();
  },

  isTask() {},

  sortList() {
    const newList = [...this.list].sort((a, b) => {
      const value = a.status < b.status ? 1 : a.status > b.status ? -1 : 0;
      return value;
    });

    console.log(newList);
    this.list = newList;
  },
};

export { todo };
