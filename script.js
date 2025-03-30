import { todo } from './todo.js';
import { UI_CLASS } from './constants.js';

const TASK_ID_ATTRIBUTE = 'taskId';

const formHigh = document.querySelector(UI_CLASS.FORM_HIGH);
const taskList = document.querySelector(`.${UI_CLASS.TASK_LIST}`);

const appInit = () => {
  todo.init();
  render();
}

const createTaskUi = (task) => {
  const { text, status, id } = task;

  const taskUi = document.createElement('div');
  const taskText = document.createElement('p');
  const removeButton = document.createElement('button');
  const statusButton = document.createElement('input');

  taskText.textContent = text;
  taskUi.setAttribute(TASK_ID_ATTRIBUTE, id);
  if (status === todo.STATUS.DONE) taskUi.classList.add(todo.STATUS.DONE);

  statusButton.type = 'checkbox';
  statusButton.checked = status === todo.STATUS.DONE;
  statusButton.classList.add(UI_CLASS.STATUS);

  removeButton.classList.add(UI_CLASS.REMOVE);
  removeButton.textContent = '\u2573';

  taskUi.append(taskText, statusButton, removeButton);
  taskUi.classList.add(UI_CLASS.TASK_UI);

  return taskUi;
};

const createTaskList = () => {
  taskList.textContent = '';

  todo.list.forEach((task) => {
    const taskUi = createTaskUi(task);
    taskList.append(taskUi);
  });

  return taskList;
};

const formHandler = (event) => {
  event.preventDefault();
  const target = event.target;
  const input = target.inTask;
  const priority = target.getAttribute('priority');
  const value = input.value;

  const trim = value.trim().length
  if(trim > 50 || trim < 2) return

  todo.addTask(input.value, priority);
  input.value = '';

  render();
};

const render = () => {
  createTaskList();
};

const isRemove = (target) => target.className === UI_CLASS.REMOVE;
const isCheckbox = (target) => target.className === UI_CLASS.STATUS;

const todoHandler = (event) => {
  const { target } = event;
  const id = target.parentNode.getAttribute(TASK_ID_ATTRIBUTE);

  if (isRemove(target)) todo.removeTask(id);
  if (isCheckbox(target)) {
    const status = target.checked ? todo.STATUS.DONE : todo.STATUS.IN_PROGRESS;
    todo.changeStatus(id, status);
  }

  render();
};

document.addEventListener('DOMContentLoaded', appInit)
taskList.addEventListener('click', todoHandler);
formHigh.addEventListener('submit', formHandler);
