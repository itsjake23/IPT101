let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span onclick="toggleTask(${index})" class="${task.done ? 'completed' : ''}">
                ${task.text}
            </span>
            <button onclick="deleteTask(${index})">X</button>
        `;

        list.appendChild(li);
    });
}

function addTask(){
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if(text === "") return;

    tasks.push({text:text, done:false});
    input.value = "";

    saveTasks();
    renderTasks();
}

function toggleTask(index){
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

function deleteTask(index){
    tasks.splice(index,1);
    saveTasks();
    renderTasks();
}

renderTasks();