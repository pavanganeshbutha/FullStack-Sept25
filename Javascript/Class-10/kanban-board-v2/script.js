const openAddTaskModalBtn = document.querySelector('#open-add-task-modal-btn');
const addTaskModal = document.querySelector('#add-task-modal');
const closeModalBtn = document.querySelector('#close-modal-btn');
const createTaskBtn = document.querySelector('#create-task-btn');
const form = document.querySelector('form');
const todoTasksContainer = document.querySelector('#todo-tasks');
const inprogressTasksContainer = document.querySelector('#inprogress-tasks');
const doneTasksContainer = document.querySelector('#done-tasks')

function uuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

const tasks = [
    {
        description: 'Learn DOM',
        priority: 'pink', //p0 - Critical
        status: 'todo',
        createdAt: new Date().toISOString(),
        id: uuid()
    },
    {
        description: 'Learn Tennis',
        priority: 'blue', //p1 - High
        status: 'in_progress',
        createdAt: new Date().toISOString(),
        id: uuid()
    },
    {
        description: 'Go to Gym',
        priority: 'black', //p2 - Medium
        status: 'done',
        createdAt: new Date().toISOString(),
        id: uuid()
    },
    {
        description: 'Practice JS',
        priority: 'green', //p3 - Low
        status: 'todo',
        createdAt: new Date().toISOString(),
        id: uuid()
    }
]

// How to add the task
// 1. Listen to submit event
// 2. Grab the data from the modal
// 3. Add the data to the `tasks` list

function initilizeApp() {
    renderTasks();
    setUpEventListeners();
}

function createTask(task) {
    const div = document.createElement('div');
    div.innerHTML = `<div class="task task-${task.priority}">
        <p>${task.description}</p>
        <p>${task.status}</p>
    </div>`

    const span = document.createElement('span');
    span.innerHTML = '<i class="bi bi-trash"></i>';

    span.addEventListener('click', function () {
        deleteTask(span.getAttribute('data-id'));
    });

    span.setAttribute('data-id', task.id);

    div.children[0].append(span);

    return div;
}

function renderTaskListToUI(container, taskList) {
    for (let task of taskList) {
        const taskComponent = createTask(task);
        container.append(taskComponent);
    }
}

function renderTasks() {
    todoTasksContainer.innerHTML = '';
    inprogressTasksContainer.innerHTML = '';
    doneTasksContainer.innerHTML = '';

    const todoTaskList = tasks.filter((task) => task.status === 'todo');
    const inprogressTaskList = tasks.filter((task) => task.status === 'in_progress');
    const doneTaskList = tasks.filter((task) => task.status === 'done');

    renderTaskListToUI(todoTasksContainer, todoTaskList);
    renderTaskListToUI(inprogressTasksContainer, inprogressTaskList);
    renderTaskListToUI(doneTasksContainer, doneTaskList);
}

function addTask(description, priority) {
    const newTask = {
        description,
        priority,
        id: uuid(),
        status: 'todo',
        createdAt: new Date().toISOString()
    }
    tasks.push(newTask);
    renderTasks()
}

function deleteTask(id) {
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    renderTasks();
}

function setUpEventListeners() {
    openAddTaskModalBtn.addEventListener('click', function () {
        addTaskModal.style.display = 'block';
    });
    closeModalBtn.addEventListener('click', function () {
        addTaskModal.style.display = 'none';
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // grab the description from the form
        const description = form.elements[0].value;

        // grab the priority from the form
        const priorityInput = document.querySelector('input[name="priority"]:checked');
        const priority = priorityInput.value;
        console.log(priority);
        addTask(description, priority);
        addTaskModal.style.display = 'none';
    });
}

initilizeApp();
