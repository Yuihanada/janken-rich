// alert(111);
console.log("あああ　はじめてのジャバスクリプト");
console.log(23 + 5);
console.log(2000 - 1800);
console.log("18+5");

var test = "ジーズアカデミー";
var test1 = 111;

console.log(test, "箱の中身をチェック");

// var score = 90;

// if (score === 90) {
// console.log("すばらしい！最高です！！");
// } else if (score === 70) {
// console.log("よくがんばりました！！");
// } else if (score === 50) {
//   console.log("もっとがんばりましょう");
// } else if (score === 10) {
//   console.log("気合が足りません！！");
// }

// JavaScript
$(function () {
  // 0: グー, 1: チョキ, 2: パー
  function playGame(playerHand) {
    var enemyHand = Math.floor(Math.random() * 3);
    var resultText = "";
    var color = "";

    console.log("あなた:", playerHand, "敵:", enemyHand);

    // 勝敗判定
    if (playerHand === enemyHand) {
      resultText = "あいこ(°_°)";
      color = "black";
    } else if (
      (playerHand === 0 && enemyHand === 1) || // グー > チョキ
      (playerHand === 1 && enemyHand === 2) || // チョキ > パー
      (playerHand === 2 && enemyHand === 0) // パー > グー
    ) {
      resultText = "勝ち🏅";
      color = "red";
    } else {
      resultText = "負け😭";
      color = "blue";
    }

    $("h1").text(resultText).css("color", color);
  }

  $("#a").on("click", function () {
    playGame(0); // グー
  });

  $("#b").on("click", function () {
    playGame(1); // チョキ
  });

  $("#c").on("click", function () {
    playGame(2); // パー
  });
});

// $("h1").text("押された！！");
// $("h1").css("color", "red");
// $("h1").fadeOut(3000);
