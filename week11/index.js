const inputTask = document.getElementById("input");
const addButton = document.getElementById("add");
const toDoList = document.getElementById("result");

addButton.addEventListener("click", () => {
  if (inputTask.value === "") return;
  createTask(inputTask.value);
  inputTask.value = ""; //очищает поле ввода после добавления задачи
});

function createTask(value) {
  const liTaskItem = document.createElement("li");
  liTaskItem.className = "result-item";
  liTaskItem.textContent = value;
  toDoList.append(liTaskItem);

  liTaskItem.addEventListener("click", (e) => {
    e.target.classList.toggle("result-item-active");
  });
}
