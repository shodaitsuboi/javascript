for (let i = 1; i < 51; i++) {
  count = i;
}

if (count == 10) {
  console.log("今" + count + "回ループしました。");
} else if (count == 20) {
  console.log("今" + count + "回ループしました。");
} else if (count == 30) {
  console.log("今" + count + "回ループしました。");
} else if (count == 40) {
  console.log("今" + count + "回ループしました。");
} else if (count == 50) {
  console.log("今" + count + "回ループしました。");
}

if (count % 4 == 0) {
  console.log("4で割れる数です。" + count + "");
}

if (count == 50) {
  alert("50回カウントが終わりました。");
}
