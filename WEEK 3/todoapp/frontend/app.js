const API_URL = 'http://localhost:3000/api/tasks';

async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    //title
    const titleSpan = document.createElement('span');
    titleSpan.textContent = task.title;
    if (task.completed) {
      titleSpan.style.textDecoration = 'line-through';
    }
    li.appendChild(titleSpan);

    //haon thanh
    const doneBtn = document.createElement('button');
    doneBtn.textContent = task.completed ? '✅' : '✔️';
    doneBtn.onclick = () => completeTask(task._id);
    li.appendChild(doneBtn);

    //xoa
    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.onclick = (e) => {
      e.stopPropagation();
      deleteTask(task._id);
    };
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}

async function addTask() {
  const title = document.getElementById('taskInput').value.trim();
  if (!title) return;
  
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  document.getElementById('taskInput').value = '';
  loadTasks();
}

async function completeTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT'
  });
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  loadTasks();
}

loadTasks();
