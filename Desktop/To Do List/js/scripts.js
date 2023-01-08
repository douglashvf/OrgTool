//seleção de elementos
        const editForm = document.querySelector("#edit-form");
    const todoForm = document.querySelector("#todo-form");
        const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");
        const editInput = document.querySelector("#edit-input");
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");
      
    let oldInputValue;

//funções

const saveTodo = (text) => {

    
    const todo = document.createElement("div")
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle);

    const todoDate = document.createElement("h3")
    todoDate.innerHTML = new Date().toLocaleDateString()
    todo.appendChild(todoDate);

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<ion-icon name="create-outline"></ion-icon>'
    todo.appendChild(editBtn)

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-todo")
    removeBtn.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
    todo.appendChild(removeBtn)

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();  

}

const toggleForms = () => {
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
    editForm.classList.toggle("hide");
}

const updateTodo= (text) => {
    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")
        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;
        }
    })
}


//eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();    
    const inputValue = todoInput.value;
    if(inputValue) {
       saveTodo(inputValue)
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }
   
    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }
    
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }

    if(targetEl.classList.contains("edit-todo")){
       toggleForms();
       editInput.value = todoTitle
       oldInputValue = todoTitle
    }

});

cancelEditBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value
    if(editInputValue){
        updateTodo(editInputValue)
    }

    toggleForms()
})




