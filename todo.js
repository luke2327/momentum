const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos',
    TODO_LIST = 'toDoList',
    DEL_BTN = 'delBtn';

const toDos = [];

// replace Captialize First Text
function capitalize(text) {
    const textArr = text.split(" ");
    const textLength = textArr.length;
    const tag = [];
    var i;
    for (i = 0; i < textLength; i++) {
        tag[i] = textArr[i].substring(0, 1).toUpperCase() +
            textArr[i].substring(1, textArr[i].length).toLowerCase();
    }
    return tag.join(" ").trim();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    li.classList.add(TODO_LIST)
    delBtn.innerHTML = "❌";
    delBtn.classList.add(DEL_BTN);
    span.innerText = text;
    li.append(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.append(li);
    toDosObj = {
        text: text,
        id: newId,
    };
    toDos.push(toDosObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    if (currentValue.trim() !== "") {
        paintToDo(capitalize(currentValue));
    }
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        // parsedToDos.forEach(function (toDo) {
        //     paintToDo(toDo.text);
        // })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();