const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
let toDoCount = 0;
let uncheckedItems = 0;

function newTodo() {
  let toDoTask = toDoText();
  increaseItemCount();

  // create the necessary elements
  let li = document.createElement("li");
  let label = document.createElement("label");
  let toDo = document.createElement("span");
  let description = document.createTextNode(toDoTask);
  let checkbox = document.createElement("input");

  // Create check box
  checkbox.type = "checkbox";
  checkbox.name = "slct[]";

  // Allow user to check off to do items and to edit to do items
  checkbox.onclick = updateUnchecked;
  toDo.onclick = updateToDo;

  // Create the delete option
  let removeToDoButton = document.createElement("span");
  removeToDoButton.innerHTML = "&nbsp;&#10007;&nbsp;";
  removeToDoButton.className = "todo-delete";
  removeToDoButton.onclick = function() {
    toDoCount--;
    if (list.removeChild(li).childNodes[0].control.checked === false)
      uncheckedItems--;
    itemCountSpan.textContent = toDoCount;
    uncheckedCountSpan.textContent = uncheckedItems;
  };

  //Add  the new to do item to the to do app list
  label.appendChild(checkbox); // add the box to the element
  label.className = "todo-checkbox";
  toDo.className = "todo-text";
  toDo.appendChild(description);
  li.appendChild(label);
  li.appendChild(toDo);
  li.appendChild(removeToDoButton);
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
  let newToDo = toDoText();
  this.textContent = newToDo;
}
function toDoText() {
  let todo = "";
  while (!todo) {
    todo = prompt("Enter new to do task.", "Nothing to do now.");
  }
  return todo;
}
