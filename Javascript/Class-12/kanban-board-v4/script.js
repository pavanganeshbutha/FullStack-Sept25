const openAddTaskModalBtn = document.querySelector('#open-add-task-modal-btn');
const addTaskModal = document.querySelector('#add-task-modal');
const closeModalBtn = document.querySelector('#close-modal-btn');
const createTaskBtn = document.querySelector('#create-task-btn');
const form = document.querySelector('form');
const todoTasksContainer = document.querySelector('#todo-tasks');
const inprogressTasksContainer = document.querySelector('#inprogress-tasks');
const doneTasksContainer = document.querySelector('#done-tasks')
const priorityDivs = document.querySelectorAll('.tool-box div');

function uuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

let selectedPriority = 'all';

const priorities = ['pink', 'green', 'blue', 'black'];



let tasks = [];
// How to add the task
// 1. Listen to submit event
// 2. Grab the data from the modal
// 3. Add the data to the `tasks` list

function loadTasksFromLocalStorage() {
    const initialTasks = JSON.parse(window.localStorage.getItem('tasks') || '[]');
    tasks = initialTasks;
}

function syncToLocalStorage() {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

function initilizeApp() {
    loadTasksFromLocalStorage();
    renderTasks();
    setUpEventListeners();
}

function createLockElement(task) {
    const i = document.createElement('i');
    i.classList.add('lock');
    task.locked ? i.classList.add('bi', 'bi-lock-fill') : i.classList.add('bi', 'bi-unlock');
    i.addEventListener('click', function () {
        task.locked = !task.locked;
        renderTasks();
        syncToLocalStorage();
    });
    return i;
}

function createTask(task) {
    const div = document.createElement('div');
    div.innerHTML = `<div class="task task-${task.priority}">
        <p>${task.description}</p>
        <p>${task.status}</p>
        <p>${task.priority}</p>
    </div>`

    const span = document.createElement('span');
    span.innerHTML = '<i class="bi bi-trash"></i>';

    span.addEventListener('click', function () {
        deleteTask(span.getAttribute('data-id'));
    });

    span.setAttribute('data-id', task.id);

    const select = createPrioritySelection(task);
    const lockElement = createLockElement(task);

    div.children[0].append(span);
    div.children[0].append(select);
    div.children[0].append(lockElement);

    return div;
}

function updatePriority(taskId, newPriority) {
    const task = tasks.find((task) => task.id === taskId);
    if (!task) {
        console.log(`no task found for the id ${taskId}`);
    }
    // if task is found then update the priority
    task.priority = newPriority;
    renderTasks();
    syncToLocalStorage();
}

function createPrioritySelection(task) {
    const select = document.createElement('select');
    for (let priority of priorities) {
        const option = document.createElement('option');
        option.innerText = priority;
        if (task.priority === priority) {
            option.setAttribute('selected', true);
        }
        select.append(option);
    }

    if (task.locked) {
        select.setAttribute('disabled', true);
    }

    select.addEventListener('change', function () {
        updatePriority(task.id, select.value);
    });

    return select;
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

    let filteredTasks = tasks;
    if (selectedPriority !== 'all') {
        filteredTasks = tasks.filter((task) => task.priority === selectedPriority);
    }

    const todoTaskList = filteredTasks.filter((task) => task.status === 'todo');
    const inprogressTaskList = filteredTasks.filter((task) => task.status === 'in_progress');
    const doneTaskList = filteredTasks.filter((task) => task.status === 'done');

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
        locked: true,
        createdAt: new Date().toISOString()
    }
    tasks.push(newTask);
    renderTasks();
    syncToLocalStorage();
}

function deleteTask(id) {
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    renderTasks();
    syncToLocalStorage();
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
        addTask(description, priority);
        addTaskModal.style.display = 'none';
    });

    for (const priorityDiv of priorityDivs) {
        priorityDiv.addEventListener('click', function () {
            const alreadySelected = document.querySelector('.tool-box div.selected-priority');
            if (priorityDiv === alreadySelected) {
                return;
            }

            if (alreadySelected) {
                alreadySelected.classList.remove('selected-priority');
            }
            priorityDiv.classList.add('selected-priority');
            const currSelectedPriority = priorityDiv.getAttribute('data-priority');
            selectedPriority = currSelectedPriority;
            renderTasks();
        })
    }
}

initilizeApp();
