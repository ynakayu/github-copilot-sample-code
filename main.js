// シンプルなパスワードジェネレーター
function generatePassword(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// 生成されたパスワードを画面に表示
function displayPasswords() {
    const lengthInput = document.getElementById('passwordLength');
    const countInput = document.getElementById('passwordCount');
    const passwordDisplay = document.getElementById('passwordDisplay');

    const length = parseInt(lengthInput.value, 10);
    const count = parseInt(countInput.value, 10);

    // 入力値のバリデーション
    if (isNaN(length) || length <= 0 || isNaN(count) || count <= 0) {
        alert('桁数と個数には正の整数を入力してください。');
        return;
    }

    // パスワードリストをクリア
    passwordDisplay.innerHTML = '';

    // 指定された個数のパスワードを生成してリストに追加
    for (let i = 0; i < count; i++) {
        const password = generatePassword(length);
        const listItem = document.createElement('li');
        listItem.textContent = password;
        passwordDisplay.appendChild(listItem);
    }
}