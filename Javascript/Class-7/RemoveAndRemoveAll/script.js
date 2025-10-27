/*

Problem Statement:

Implement JavaScript functionality for a task management web application 
that allows users to individually remove tasks from a 
list or clear the entire list at once. 
The HTML template includes a list of tasks, each with a dedicated "delete" button, 
and a separate "Remove All" button for bulk deletion. 
Your solution should enable the "delete" buttons to remove their respective
tasks from the list and the "Remove All" button to clear all tasks from
the list simultaneously.

*/

const buttons = document.querySelectorAll('.delete_button');
const removeAllBtn = document.getElementById('removeAll');

removeAllBtn.addEventListener('click', function () {
    for (let btn of buttons) {
        btn.parentElement.remove();
    }
})

for (const btn of buttons) {
    btn.addEventListener('click', function () {
        btn.parentElement.remove();
    })
}

