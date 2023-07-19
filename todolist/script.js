const container = document.querySelector('.container');
const newTaskInput = document.getElementById('new_task_input')
const tasksList = document.getElementById('tasksList');
const taskForm = document.getElementById('new_task_form');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTaskInputValue = taskForm.elements.new_task_input;
    
    HandleNewTask(newTaskInputValue.value);

    newTaskInputValue.value = '';
    container.classList.remove('task_list_empty');

})

const HandleNewTask = (newTask) => {
    const newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class', 'task_item');

    const newCheckBtn = document.createElement('div');
    newCheckBtn.setAttribute('class', 'task_check_btn')

    const newTrashbtn = document.createElement('div');
    newTrashbtn.setAttribute('class', 'task_trash_btn');

    const newTaskBio = document.createElement('span');
    newTaskBio.setAttribute('class', 'task_bio');

    const newButtonGroup = document.createElement('div');
    newButtonGroup.setAttribute('class', 'task_btn_group');

    newTaskBio.innerText = newTask;

    newButtonGroup.appendChild(newTrashbtn);
    newButtonGroup.appendChild(newCheckBtn);

    tasksList.appendChild(newTaskItem);
    newTaskItem.appendChild(newTaskBio);
    newTaskItem.appendChild(newButtonGroup);
    

    HandleTaskDone(newCheckBtn);

    HandleTaskDelete(newTrashbtn);
}

const HandleTaskDone = (taskDone) => {

    taskDone.addEventListener('click', (e) => {
        console.log(e.target.parentElement.parentElement)
        const item = e.target.parentElement.parentElement;
        const btn = e.target

        setTimeout(() => {
            item.classList.add('task-completed');
            btn.classList.add('task_check_btn_done');
        }, 400);
    })
}

const HandleTaskDelete = (taskDelete) => {
    taskDelete.addEventListener('click', (e) => {
        const taskItem = e.target.parentElement.parentElement;
        
        setTimeout(() => {
            taskItem.remove();
        }, 400);
    })
}