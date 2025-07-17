const API_URL = window.location.origin + '/api/tasks';

let tasks = [];
let currentFilter = 'all';
let editingTaskId = null;

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');
const editModal = document.getElementById('editModal');
const editTaskInput = document.getElementById('editTaskInput');

const totalTasksSpan = document.getElementById('totalTasks');
const completedTasksSpan = document.getElementById('completedTasks');
const pendingTasksSpan = document.getElementById('pendingTasks');

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  setupEventListeners();
});

function setupEventListeners() {
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  editTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      saveEdit();
    }
  });

  editModal.addEventListener('click', (e) => {
    if (e.target === editModal) {
      closeEditModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEditModal();
    }
  });
}

async function loadTasks() {
  try {
    showLoading();
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    
    tasks = await response.json();
    renderTasks();
    updateStats();
  } catch (error) {
    console.error('Error loading tasks:', error);
    showError('Failed to load tasks. Please try again.');
  } finally {
    hideLoading();
  }
}

async function addTask() {
  const title = taskInput.value.trim();
  
  if (!title) {
    showError('Please enter a task title');
    return;
  }

  if (title.length > 100) {
    showError('Task title is too long (max 100 characters)');
    return;
  }

  try {
    showLoading();
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });

    if (!response.ok) throw new Error('Failed to add task');

    taskInput.value = '';
    await loadTasks();
    showSuccess('Task added successfully!');
  } catch (error) {
    console.error('Error adding task:', error);
    showError('Failed to add task. Please try again.');
  } finally {
    hideLoading();
  }
}

async function toggleTask(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, { 
      method: 'PUT' 
    });

    if (!response.ok) throw new Error('Failed to update task');

    await loadTasks();
  } catch (error) {
    console.error('Error toggling task:', error);
    showError('Failed to update task. Please try again.');
  }
}

async function deleteTask(id) {
  if (!confirm('Are you sure you want to delete this task?')) {
    return;
  }

  try {
    showLoading();
    const response = await fetch(`${API_URL}/${id}`, { 
      method: 'DELETE' 
    });

    if (!response.ok) throw new Error('Failed to delete task');

    await loadTasks();
    showSuccess('Task deleted successfully!');
  } catch (error) {
    console.error('Error deleting task:', error);
    showError('Failed to delete task. Please try again.');
  } finally {
    hideLoading();
  }
}

function openEditModal(id, currentTitle) {
  editingTaskId = id;
  editTaskInput.value = currentTitle;
  editModal.style.display = 'block';
  editTaskInput.focus();
}

function closeEditModal() {
  editModal.style.display = 'none';
  editingTaskId = null;
  editTaskInput.value = '';
}

async function saveEdit() {
  const newTitle = editTaskInput.value.trim();
  
  if (!newTitle) {
    showError('Please enter a task title');
    return;
  }

  if (newTitle.length > 100) {
    showError('Task title is too long (max 100 characters)');
    return;
  }

  try {
    showLoading();
    const response = await fetch(`${API_URL}/${editingTaskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle })
    });

    if (!response.ok) throw new Error('Failed to update task');

    closeEditModal();
    await loadTasks();
    showSuccess('Task updated successfully!');
  } catch (error) {
    console.error('Error updating task:', error);
    showError('Failed to update task. Please try again.');
  } finally {
    hideLoading();
  }
}

function filterTasks(filter) {
  currentFilter = filter;
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  renderTasks();
}

function searchTasks() {
  renderTasks();
}

function renderTasks() {
  const searchTerm = searchInput.value.toLowerCase();
  
  let filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm);
    const matchesFilter = 
      currentFilter === 'all' || 
      (currentFilter === 'completed' && task.completed) ||
      (currentFilter === 'pending' && !task.completed);
    
    return matchesSearch && matchesFilter;
  });

  taskList.innerHTML = '';
  
  if (filteredTasks.length === 0) {
    emptyState.classList.remove('hidden');
    if (searchTerm) {
      emptyState.innerHTML = `
        <i class="fas fa-search"></i>
        <h3>No tasks found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      `;
    } else if (currentFilter === 'completed') {
      emptyState.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>No completed tasks</h3>
        <p>Complete some tasks to see them here!</p>
      `;
    } else if (currentFilter === 'pending') {
      emptyState.innerHTML = `
        <i class="fas fa-clock"></i>
        <h3>No pending tasks</h3>
        <p>Great job! You're all caught up!</p>
      `;
    } else {
      emptyState.innerHTML = `
        <i class="fas fa-clipboard-list"></i>
        <h3>No tasks yet</h3>
        <p>Add your first task above to get started!</p>
      `;
    }
    return;
  }

  emptyState.classList.add('hidden');
  
  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    
    li.innerHTML = `
      <div class="task-checkbox ${task.completed ? 'checked' : ''}" 
           onclick="toggleTask('${task._id}')">
        ${task.completed ? '<i class="fas fa-check"></i>' : ''}
      </div>
      <span class="task-text" onclick="openEditModal('${task._id}', '${task.title.replace(/'/g, "\\'")}')">
        ${escapeHtml(task.title)}
      </span>
      <div class="task-actions">
        <button class="task-btn edit-btn" onclick="openEditModal('${task._id}', '${task.title.replace(/'/g, "\\'")}')">
          <i class="fas fa-edit"></i>
        </button>
        <button class="task-btn delete-btn" onclick="deleteTask('${task._id}')">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    
    taskList.appendChild(li);
  });
}

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;
  
  totalTasksSpan.textContent = total;
  completedTasksSpan.textContent = completed;
  pendingTasksSpan.textContent = pending;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function showLoading() {
  document.body.style.cursor = 'wait';
}

function hideLoading() {
  document.body.style.cursor = 'default';
}

function showSuccess(message) {
  showNotification(message, 'success');
}

function showError(message) {
  showNotification(message, 'error');
}

function showNotification(message, type) {
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notif => notif.remove());

  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
    <button class="close-notification" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `;

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    z-index: 1001;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    animation: slideIn 0.3s ease;
    max-width: 300px;
    background: ${type === 'success' ? 'linear-gradient(135deg, #48bb78, #38a169)' : 'linear-gradient(135deg, #f56565, #e53e3e)'};
  `;

  const closeBtn = notification.querySelector('.close-notification');
  closeBtn.style.cssText = `
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0;
    margin-left: auto;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
