$(function () {
  //この中に記述 ゲームスタート
  $(".btn").on("click", function () {
    // jQueryの操作でcssを動かす
    $(".btn").fadeOut(1000);
    $("h1").fadeIn(3000);
    $(".box1 img").fadeIn(4000);
  });

  // ①　猫を選択した場合
  $("#neko").on("click", function () {
    //乱数
    const l = Math.ceil(Math.random() * 2);
    //if分岐処理
    if (l == 1) {
      alert("失敗!猫はチーズに夢中だ!");
    } else {
      alert("成功!ネズミを追い払ってくれたよ!");
    }
  });

  // ②　ネズミ取りを選択した場合
  $("#mousetrap").on("click", function () {
    //乱数
    const m = Math.ceil(Math.random() * 5);
    //if分岐処理 確率低
    if (m == 1) {
      alert("成功!ネズミを仕留めた!");
    } else {
      alert("失敗!ネズミはトラップに気づいて逃げてしまった!");
    }
  });

  // ③　？ボックスを選択した場合
  $("#secret").on("click", function () {
    //乱数
    const n = Math.ceil(Math.random() * 2);
    //if分岐処理
    if (n == 1) {
      $("#secret").attr("src", "./img/05.jpeg");
      alert("腐ったチーズが出てきた！");
      alert("おめでとう!ネズミは去っていったよ!");
    } else {
      $("#secret").attr("src", "./img/06.jpeg");
      alert("haha!");
    }
  });

  // この下は消しちゃダメ
});
