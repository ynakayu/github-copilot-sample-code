document.getElementById("convert-button").addEventListener("click", function () {
    const yenInput = document.getElementById("yen-input").value;
    const resultElement = document.getElementById("result");
    const errorMessageElement = document.getElementById("error-message");

    // 為替レート
    const exchangeRate = 0.0067;

    // 入力値の検証
    if (!yenInput || isNaN(yenInput) || Number(yenInput) <= 0) {
        errorMessageElement.textContent = "有効な金額を入力してください。";
        resultElement.textContent = "";
        return;
    }

    // エラーメッセージをクリア
    errorMessageElement.textContent = "";

    // 換算結果を計算
    const yenAmount = parseFloat(yenInput);
    const usdAmount = (yenAmount * exchangeRate).toFixed(2);

    // 結果を表示
    resultElement.textContent = `${yenAmount} JPY は ${usdAmount} USD です。`;
});