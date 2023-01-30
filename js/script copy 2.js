"use strict";

const inputTodo = document.getElementById("inputTodo");
const addBtn = document.getElementById("addBtn");
const todoLists = document.getElementById("todoLists");

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

    // 入力された値を配列に保存
    todos.push({
        id: currentNum,
        title: title
    });
    
    // リストの作成
    createTodoList();

    // 入力をクリアに
    inputTodo.value = "";
    // idをプラス1
    currentNum++;
});

// リスト作成関数
const createTodoList = () => {

    // タスクを追加するときに、li要素の子要素のタスクを削除する
    while (todoLists.firstChild) {
        todoLists.removeChild(todoLists.firstChild);
    }

    // todoリストの生成
    todos.forEach((todo) => {

        // li要素
        const todoItem = document.createElement("li");

        // input(checkbox)要素
        const todoCheck = document.createElement("input");
        todoCheck.setAttribute("type", "checkbox");
        todoCheck.id = todo.id;

        // lavel要素
        const todoTitle = document.createElement("label");
        todoTitle.textContent = todo.title;
        todoTitle.setAttribute("for", todo.id);

        // span(delete)要素
        const todoDelete = document.createElement("span");
        todoDelete.textContent = "[x]";
        todoDelete.addEventListener('click', () => {
            todoItem.remove();
            todos.splice(todo.id);
        });
        console.log(todo);

        // li要素(todoItem)の中に要素を追加
        todoItem.appendChild(todoCheck);
        todoItem.appendChild(todoTitle);
        todoItem.appendChild(todoDelete);
        todoLists.appendChild(todoItem);
    });
};