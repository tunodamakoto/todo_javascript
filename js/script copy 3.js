"use strict";

const inputTodo = document.getElementById("inputTodo");
const addBtn = document.getElementById("addBtn");
const todoLists = document.getElementById("todoLists");
const deleteTodo = document.getElementById("deleteTodo")

let currentNum = 1;
let todos = [];

// todo追加
addBtn.addEventListener('click', () => {
    const title = inputTodo.value.trim();

    // 未入力チェック
    if(title === "") {
        alert('タスクを入力してください。');
        return;
    }

    // li要素
    const todoItem = document.createElement("li");

    // input(checkbox)要素
    const todoCheck = document.createElement("input");
    todoCheck.setAttribute("type", "checkbox");
    todoCheck.id = currentNum;
    todoCheck.classList.add("checkbox");

    // lavel要素
    const todoTitle = document.createElement("label");
    todoTitle.textContent = title;
    todoTitle.setAttribute("for", currentNum);

    // span(delete)要素
    const todoDelete = document.createElement("span");
    todoDelete.textContent = "[x]";
    todoDelete.addEventListener('click', () => {
        todoItem.remove();
    });

    // チェックでdone
    todoCheck.addEventListener('change',function() {
        if(this.checked) {
            todoCheck.dataset.name = 'checked';
            todoCheck.classList.add('checked');
            todoTitle.classList.add("done");
        } else {
            todoCheck.dataset.name = '';
            todoCheck.classList.remove('checked');
            todoTitle.classList.remove("done");
        }
    });

    // li要素(todoItem)の中に要素を追加
    todoItem.appendChild(todoCheck);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDelete);
    todoLists.appendChild(todoItem);

    // 入力をクリアに
    inputTodo.value = "";
    // idをプラス1
    currentNum++;
});

// まとめて削除
deleteTodo.addEventListener('click', () => {
    const checkMulti = document.getElementsByClassName("checkbox");
    const targetCount = checkMulti.length;
    let value = [];
    for(let i = 0; i < targetCount; i++) {
        value.push(checkMulti[i].getAttribute('data-name'));
    }
    let data = value.filter(Boolean);
    const parentCount = data.length;
    let parent = [];
    for(let i = 0; i < parentCount; i++) {
        parent.push(checkMulti[i].parentElement);
    }
    parent.forEach(function(value) {
        value.remove();
    });
});

// リロードでローカルストレージのなかを表示
document.addEventListener("DOMContentLoaded", () => {
    
    // ストレージ内のkey(store)をjsonに格納
    const json = storage.store;
    // json内が何もなければ処理終了
    if (json === undefined) {
      return;
    }

    // 配列形式に格納
    listItems = JSON.parse(json);
    console.log(listItems);
    // 繰り返し処理
    for (const item of listItems) {

    }
});