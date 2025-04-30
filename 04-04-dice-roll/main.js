// 1から6のサイコロを一回振って結果を返す関数
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());