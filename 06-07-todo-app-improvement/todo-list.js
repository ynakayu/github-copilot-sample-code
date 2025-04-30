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
    const taskText = document.createElement('span');
    taskText.textContent = task;
    taskText.style.cursor = 'pointer';

    // 編集フォームとボタンを作成
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.style.display = 'none';

    const editButton = document.createElement('button');
    editButton.textContent = '編集';
    editButton.style.display = 'none';

    // タスクテキストをクリックで編集モードに切り替え
    taskText.addEventListener('click', function () {
      editInput.value = taskText.textContent;
      taskText.style.display = 'none';
      editInput.style.display = 'inline';
      editButton.style.display = 'inline';
    });

    // 編集ボタンをクリックでタスクを更新
    editButton.addEventListener('click', function () {
      const updatedTask = editInput.value.trim();
      if (updatedTask) {
        taskText.textContent = updatedTask;
        taskText.style.display = 'inline';
        editInput.style.display = 'none';
        editButton.style.display = 'none';
      } else {
        alert('タスクを入力してください。');
      }
    });

    // チェックボックスとタスクをリストアイテムに追加
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    list.appendChild(listItem);

    input.value = ''; // 入力欄をクリア
  } else {
    alert('タスクを入力してください。');
  }
});

// チェックボックスの状態を監視してボタンの表示/非表示を切り替える関数
function updateButtonVisibility() {
  const list = document.getElementById('todo-list');
  const tasks = list.querySelectorAll('li');
  const deleteButton = document.getElementById('delete-button');
  const completeButton = document.getElementById('complete-button');

  const hasChecked = Array.from(tasks).some(task => {
    const checkbox = task.querySelector('input[type="checkbox"]');
    return checkbox.checked;
  });

  deleteButton.style.display = hasChecked ? 'inline' : 'none';
  completeButton.style.display = hasChecked ? 'inline' : 'none';
}

// 各チェックボックスにイベントリスナーを追加
document.getElementById('todo-list').addEventListener('change', function (event) {
  if (event.target.type === 'checkbox') {
    updateButtonVisibility();
  }
});

// 初期状態でボタンを非表示に設定
document.getElementById('delete-button').style.display = 'none';
document.getElementById('complete-button').style.display = 'none';

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

// 完了ボタン機能
document.getElementById('complete-button').addEventListener('click', function () {
  const list = document.getElementById('todo-list');
  const tasks = list.querySelectorAll('li');

  tasks.forEach(task => {
    const checkbox = task.querySelector('input[type="checkbox"]');
    const taskText = task.querySelector('span');
    if (checkbox.checked) {
      taskText.style.textDecoration = 'line-through'; // 取り消し線を適用
    }
  });
});