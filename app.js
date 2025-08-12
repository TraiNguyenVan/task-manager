let tasks = [];

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const taskText = taskInput.value.trim();
        if (taskText) {
            const task = {
                id: tasks.length,
                time: new Date(),
                text: taskText,
                completed: false
            };
            tasks.push(task);
            renderTasks();
            taskInput.value = ''; // Clear input field
        } else {
            console.error('Task cannot be empty');
        }
    });
    
});

function renderTasks() {
    const taskList = document.getElementById('tasklist');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const tr = document.createElement('tr');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function() {
            task.completed = checkbox.checked;
            renderTasks(); // Re-render to update the task list
        });
        const taskcontent = document.createTextNode(` ${task.text}`);
        const taskdate = document.createTextNode(`(Added on: ${task.time.toLocaleString()})`);
        const deletebutton = document.createElement('button');
        deletebutton.type = 'button';
        deletebutton.textContent = 'Delete';
        deletebutton.className = "delete-btn";
        deletebutton.addEventListener('click', function() {
            if (tasks.length == 1) {
                tasks = [];
            }
            else {
                tasks.splice(task.id, 1);
            }
            renderTasks(); // Re-render to update the task list

        });
        
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        td1.appendChild(checkbox);
        td2.appendChild(taskcontent);
        td3.appendChild(taskdate);
        td4.appendChild(deletebutton);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        taskList.appendChild(tr);
      });

}