const todoList = [
  "купить BMW",
  "выучить JS",
  "полететь в космос",
  "запилить дверь",
];

const newTask = "Посадить дерево";
const addTask = todoList.push(newTask);
todoList[0] = "купить Mercedes";
let lastElement = todoList[todoList.length - 1];
console.log(todoList);

const newArray = [1, 11, -2, 3, -10, 4];
const sortirovka = newArray.sort((a, b) => b - a);
console.log(sortirovka);
const newArray2 = [1, 11, -2, 3, -10, 4];
const filtration = newArray2.filter((number) => number < 0);
console.log(filtration);

const todoListMassiv = [
  { task: "купить BMW", status: "В процессе" },
  { task: "выучить JS", status: "Нужно сделать" },
  { task: "полететь в космос", status: "Готов" },
  { task: "запилить дверь", status: "Нужно сделать" },
];
todoListMassiv.sort((a, b) => {
  if (a.status < b.status) return -1;
  if (a.status > b.status) return 1;
  return 0;
});
console.log(todoListMassiv);
