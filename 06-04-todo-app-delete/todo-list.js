// タスク追加機能
document.getElementById('add-button').addEventListener('click', function () {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();

  if (task) {
    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');

    // チェックボックスを作成
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // タスクテキストを設定
    const taskText = document.createTextNode(task);

    // チェックボックスとタスクをリストアイテムに追加
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    list.appendChild(listItem);

    input.value = ''; // 入力欄をクリア
  } else {
    alert('タスクを入力してください。');
  }
});

// タスク削除機能
document.getElementById('delete-button').addEventListener('click', function () {
  const list = document.getElementById('todo-list');
  const tasks = list.querySelectorAll('li');

  tasks.forEach(task => {
    const checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      list.removeChild(task); // チェックされたタスクを削除
    }
  });
});