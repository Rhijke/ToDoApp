const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete"
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
let toDoCount = 0;

function newTodo() {
  classNames["TODO_TEXT"] = prompt(
    "Please enter a to do item.",
    "Nothing to do now."
  );
  if (classNames["TODO_TEXT"] !== "") increaseItemCount();
}
function increaseItemCount() {
  toDoCount++;
  itemCountSpan.textContent = toDoCount;
}
function createCheckBox() {}
