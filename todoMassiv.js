import { todoList } from "./app.js";
import { newArray } from "./app.js";
import { todoListMassiv } from "./app.js";
import { newArray2 } from "./app.js";

todoList[0] = "купить Mercedes";
console.log(todoList);

const sortirovka = newArray.sort((a, b) => b - a);
console.log(sortirovka);

const filtration = newArray2.filter((number) => number < 0);
console.log(filtration);

function sortMassiv(massiv) {
  massiv.sort((a, b) => {
    if (a.status < b.status) return -1;
    if (a.status > b.status) return 1;
    return 0;
  });
  console.log(massiv);
}
sortMassiv(todoListMassiv);
