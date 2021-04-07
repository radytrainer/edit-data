function addTask(event) {
    event.preventDefault();
    const task = document.querySelector('#textId');
    const dates = document.querySelector('#dateId');

    // if input are empty
    if (task.value === "" && dates.value === "") return confirm("Field cannot empty!");

    // create card div
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', index);

    // span task name
    const taskName = document.createElement('span');
    taskName.textContent = task.value;

    // span task date 
    const taskDate = document.createElement('span');
    taskDate.textContent = dates.value;

    // edit span
    const edit = document.createElement('span');
    edit.classList.add('edit');
    edit.textContent = "edit";

    // delete span
    const deleteTask = document.createElement('span');
    deleteTask.classList.add('delete');
    deleteTask.textContent = "delete";

    // add to card
    card.appendChild(taskName);
    card.appendChild(taskDate);
    card.appendChild(edit);
    card.appendChild(deleteTask);

    // add card to ouput
    output.appendChild(card);

    // increment 
    index++;

    // add to array
    taskList.push({name: task.value, date: dates.value});

    // clear
    dates.value = "";
    task.value = "";

    console.log(taskList);

}

function userAction(event) {

    let card = event.target.parentElement;
    let task = card.firstElementChild.textContent;
    let dates = card.firstElementChild.nextElementSibling.textContent;
    const taskName = document.querySelector('#textId');
    const taskDate = document.querySelector('#dateId');
    // edit
    if (event.target.className === "edit") {
        taskName.value = task;
        taskDate.value = dates;
        index = card.id;
       
    }
    // delete or remove
    if (event.target.className === "delete") {
        card.remove();
    }
}

function  updateTask(event) {
    event.preventDefault();
    let cards = document.querySelectorAll('.card');
    const taskName = document.querySelector('#textId');
    const taskDate = document.querySelector('#dateId');

    cards[index].firstElementChild.textContent = taskName.value;
    cards[index].firstElementChild.nextElementSibling.textContent = taskDate.value;
}
// main
const btnCreate = document.querySelector('#createId');
const output = document.querySelector('.output');
const btnUpdate = document.querySelector('#updateId');

let taskList = [];
let index = 0;

btnCreate.addEventListener('click', addTask);
output.addEventListener('click', userAction);
btnUpdate.addEventListener('click', updateTask);
