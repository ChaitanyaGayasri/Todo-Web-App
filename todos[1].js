let todoItemscontainer = document.getElementById("todoItemsContainer");

let todolist = [{
        text: "Learn HTML",
        uniqueno: 1
    },
    {
        text: "Learn CSS",
        uniqueno: 2
    },
    {
        text: "Learn Javascript",
        uniqueno: 3
    }
]

function onTodoStatusChange(checkboxid, labelid) {
    let checkboxEle = document.getElementById(checkboxid);
    let labelEle = document.getElementById(labelid);

    if (checkboxEle.checked === true) {
        labelEle.classList.add("checked");
    } else {
        labelEle.classList.remove("checked");
    }
}


function onDeleteTodo(todoId) { // DeleteICon
    let todoELe = document.getElementById(todoId);

    todoItemscontainer.removeChild(todoELe);
}

function createAppendTodo(todo) {
    let checkboxid = "checkbox" + todo.uniqueno; //"checkbbox"+ 1 = checkbox1 , //"checkbbox"+ 2= checkbox2
    let labelid = "label" + todo.uniqueno;
    let todoId = "todo" + todo.uniqueno;


    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId
    todoItemscontainer.appendChild(todoElement);


    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxid;
    inputElement.classList.add("checkbox-input");

    inputElement.onclick = function() {
        onTodoStatusChange(checkboxid, labelid);
    }
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);


    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxid);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelid;

    labelContainer.appendChild(labelElement);


    let deleteIconContainerEle = document.createElement("div");

    deleteIconContainerEle.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainerEle);

    let deleteIconEle = document.createElement("i");
    deleteIconEle.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconEle.onclick = function() {
        onDeleteTodo(todoId);
    }
    deleteIconContainerEle.appendChild(deleteIconEle);
}

for (let todo of todolist) {
    createAppendTodo(todo);
}

let todoCount = todolist.length

function onAddButton() {
    let InputUserEle = document.getElementById("todoUserInput")
    let userInputValue = InputUserEle.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }
    todoCount = todoCount + 1;
    let todoObj = {
        text: userInputValue,
        uniqueno: todoCount
    }

    createAppendTodo(todoObj);
    InputUserEle.value = "";
}


let addButtonEle = document.getElementById("addButton");

addButtonEle.onclick = function() {
    onAddButton()
}