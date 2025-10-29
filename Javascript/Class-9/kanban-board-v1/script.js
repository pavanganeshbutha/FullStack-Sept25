const addTaskBtn = document.querySelector('#add-task-btn');
const addTaskModal = document.querySelector('#add-task-modal');
const closeModalBtn = document.querySelector('#close-modal-btn');

function initilizeApp() {
    setUpEventListeners();
}

function setUpEventListeners() {
    addTaskBtn.addEventListener('click', function () {
        addTaskModal.style.display = 'block';
    });
    closeModalBtn.addEventListener('click', function () {
        addTaskModal.style.display = 'none';
    })
}

// initilizeApp();
