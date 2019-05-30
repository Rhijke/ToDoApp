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
  let description = document.createTextNode(classNames["TODO_TEXT"]);
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox"; // make the element a checkbox
  checkbox.name = "slct[]"; // give it a name we can check on the server side\
  checkbox.onclick = updateUnchecked;
  label.appendChild(checkbox); // add the box to the element
  label.className = "todo-checkbox";

  li.appendChild(label);
  li.appendChild(description);
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
