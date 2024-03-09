const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

let renderHtml = () => {
  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    const { name, dueDate } = todoObj;
    const html = `
      <div class="delete">
        <p>${name}<br>${dueDate} 
          <button class="delete-btn" onclick="deleteTodo(${i})">
            <img class="trash-img" src="/bin.png" alt="">
          </button>
        </p>
      </div>`;
    todoListHtml += html;
  }

  document.querySelector('.js-todos').innerHTML = todoListHtml;
}

let addTodo = () => {
  const newName = document.querySelector('.js-task').value.trim();
  const newDueDate = document.querySelector('.js-date').value.trim();

  if (newName === '') {
    alert("No Task Added");
  } else {
    todoList.push({ name: newName, dueDate: newDueDate });
    saveTodoList();
    renderHtml();
    // Clear input fields after adding task
    document.querySelector('.js-task').value = '';
    document.querySelector('.js-date').value = '';
  }
}


let deleteTodo = (index) => {
  todoList.splice(index, 1);
  saveTodoList();
  renderHtml();
}

let saveTodoList = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Initial render
renderHtml();
