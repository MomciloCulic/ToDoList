document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('myInput');
  const addButton = document.getElementById('btn');
  const clearButton = document.getElementById('clearBtn');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', addTask);
  input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
      toggleTaskState(event.target.closest('li'));
    }
  });

  clearButton.addEventListener('click', clearAllTasks);

  function addTask() {
    const taskText = input.value.trim();

    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Done!';
      deleteButton.classList.add('delete-btn');

      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      taskList.appendChild(clearButton);

      input.value = '';
      updateClearButtonVisibility();
    }
  }

  function toggleTaskState(taskItem) {
    taskItem.classList.toggle('deleted');
    updateClearButtonVisibility();
  }

  function updateClearButtonVisibility() {
    const tasks = document.querySelectorAll('li:not(.deleted)');
    if (tasks.length > 2) {
      clearButton.style.display = 'block';
    } else {
      clearButton.style.display = 'none';
    }
  }

  function clearAllTasks() {
    const tasks = document.querySelectorAll('li');
    tasks.forEach(task => task.remove());
    clearButton.style.display = 'none';
  }
});
