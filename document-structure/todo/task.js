const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const form = document.getElementById('tasks__form');

function saveTasks() {
    const tasks = Array.from(tasksList.children).map(task => task.querySelector('.task__title').textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
        addTask(taskText);
    });
}

function addTask(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'task__title';
    titleDiv.textContent = taskText;

    const removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.className = 'task__remove';
    removeLink.innerHTML = '&times;';

    
    removeLink.addEventListener('click', (e) => {
        e.preventDefault();
        taskDiv.remove();
        saveTasks();
    });

    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(removeLink);
    tasksList.appendChild(taskDiv);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTaskText = taskInput.value.trim();
    if (newTaskText !== '') {
        addTask(newTaskText);
        saveTasks();
        taskInput.value = '';
        taskInput.focus();
    }
});

loadTasks();