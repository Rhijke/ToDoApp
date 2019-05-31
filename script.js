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
let uncheckedItems = 0;

function newTodo() {
  classNames["TODO_TEXT"] = prompt(
    "Please enter a to do item.",
    "Nothing to do now."
  );
  if (classNames["TODO_TEXT"] !== "") increaseItemCount();

  // create the necessary elements
  let li = document.createElement("li");
  let label = document.createElement("label");
  let toDo = document.createElement("span");
  let description = document.createTextNode(classNames["TODO_TEXT"]);
  let checkbox = document.createElement("input");

  // Create check box
  checkbox.type = "checkbox";
  checkbox.name = "slct[]";
  // Allow user to check off to do items and to edit to do items
  checkbox.onclick = updateUnchecked;
  toDo.onclick = updateToDo;

  //Add  the new to do item to the to do app list
  label.appendChild(checkbox); // add the box to the element
  label.className = "todo-checkbox";
  toDo.className = "todo-text";
  toDo.appendChild(description);
  li.appendChild(label);
  li.appendChild(toDo);
  list.appendChild(li);
}

function increaseItemCount() {
  toDoCount++;
  uncheckedItems++;
  //console.log(`${toDoCount}  ${uncheckedItems}`);
  itemCountSpan.textContent = toDoCount;
  uncheckedCountSpan.textContent = uncheckedItems;
}

function updateUnchecked() {
  if (this.checked === true) uncheckedItems--;
  else uncheckedItems++;
  uncheckedCountSpan.textContent = uncheckedItems;
}
function updateToDo() {
  let newToDo = prompt("Enter new to do task.", "Nothing to do now.");
  if (newToDo === "" || newToDo === null) {
    newToDo = prompt("Please enter a new to do task", "Nothing to do now.");
  } else this.textContent = newToDo;
}
