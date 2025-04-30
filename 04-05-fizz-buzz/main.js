// 1〜100の数値をループし、3の倍数はFizz、5の倍数はBuzz、3と5の倍数はFizzBuzzと表示する

// 1から100までの数をループする
for (let i = 1; i <= 100; i++) {
  // 3の倍数かつ5の倍数の場合
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // 3の倍数の場合
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // 5の倍数の場合
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // 上記以外の場合
  else {
    console.log(i);
  }
}