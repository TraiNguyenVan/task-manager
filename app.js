const tasks = [];

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
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function() {
            task.completed = checkbox.checked;
            renderTasks(); // Re-render to update the task list
        });
        const textNode = document.createTextNode(` ${task.text} (Added on: ${task.time.toLocaleString()})`);
        li.appendChild(checkbox);
        li.appendChild(textNode);
        taskList.appendChild(li);
      });

}