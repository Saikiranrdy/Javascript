let todoList = [
    {
      text: "Learn HTML"
    },
    {
      text: "Learn CSS"
    },
    {
      text: "Learn JavaScript"
    }
  ];
  
  function createAndAppendTodo(todo, index) {
    let todoItemsContainer = document.getElementById("todoItemsContainer");
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
  
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput_" + index;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);
  
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);
  
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput_" + index);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);
  
    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);
  
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    let todoItemsContainer = document.getElementById("todoItemsContainer");
    for (let i = 0; i < todoList.length; i++) {
      createAndAppendTodo(todoList[i], i);
    }
  
    function addTodo() {
      let userInput = document.getElementById("todoUserInput").value.trim();
      if (userInput !== "") {
        let todo = { text: userInput };
        todoList.push(todo);
        createAndAppendTodo(todo, todoList.length - 1);
        document.getElementById("todoUserInput").value = "";
      }
    }
  
    document.querySelector(".add-todo-button").addEventListener("click", addTodo);
  });