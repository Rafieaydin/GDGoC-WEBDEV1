function addTask() {
  const input = document.getElementById('tf-input').value;
  const task = document.createElement('li');
  const dataset = document.getElementById('tf-input').dataset;

  // kalau ada dataset / id nya maka akan menjalankan fungsi editTask
  if (dataset.id) {
    editTask(dataset.id);
    return;
  }
  
  task.textContent = input;
  task.id =
    new Date().valueOf().toString() +
    Math.random().toString(36).substring(2, 7);
  task.classList.add('list-item');
  document.getElementById('task-container').appendChild(task);
  ActionButton(task.id);
  document.getElementById('tf-input').value = '';
}

function editButton(id){
  const task = document.getElementById(id);
  document.getElementById('tf-input').value = task.firstChild.textContent.trim();
  document.getElementById('tf-input').dataset.id = id;
}

function editTask(id){
  var EditTask = document.getElementById(id);
  EditTask.innerHTML = document.getElementById('tf-input').value;
  ActionButton(id);
  document.getElementById('tf-input').value = '';
  document.getElementById('tf-input').dataset.id = '';
}

function ActionButton(id){
  const deleteButton = document.createElement('button');
  task = document.getElementById(id);
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    deleteTask(task.id);
  });
  const EditButton = document.createElement('button');
  EditButton.textContent = 'Edit';
  EditButton.classList.add('edit-button');
  EditButton.addEventListener('click', (e) => {
    editButton(e.target.parentElement.id);
  });
  task.appendChild(EditButton);
  task.appendChild(deleteButton);
}
function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}
