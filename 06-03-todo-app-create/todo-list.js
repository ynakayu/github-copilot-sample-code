document.getElementById('add-button').addEventListener('click', function () {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();

  if (task) {
    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = task;
    list.appendChild(listItem);

    input.value = ''; // 入力欄をクリア
  } else {
    alert('タスクを入力してください。');
  }
});