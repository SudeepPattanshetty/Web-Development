document.addEventListener("DOMContentLoaded", () => {
  const toDoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const toDoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("task")) || [];
  tasks.forEach((task) => renderTask(task))

  addTaskBtn.addEventListener("click", () => {
    const taskText = toDoInput.value.trim();
    console.log(taskText);
    if (taskText === "") return alert("Please enter an input");

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    toDoInput.value = "";
  });

  function renderTask(task) {
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);

    if(task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button class="delete">Delete</button>
    `;

    li.addEventListener('click', (e) => {
      if(e.target.tagName === 'Button') return;
      task.completed = !task.completed
      li.classList.toggle('completed');
      saveTask();
    });

    li.querySelector(".delete").addEventListener('click', (e) => {
      e.stopPropagation(); //prevent toogle from firing
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    })
    toDoList.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("task", JSON.stringify(tasks));
  }
});