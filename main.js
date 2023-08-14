
let scoreBox = document.getElementById("score-box");
let resultBox = document.querySelector(".result-box");
let tryAgainGame = document.getElementById("try-again");
let road = document.querySelector('.road');
scoreBox.innerHTML = "Score : 0";
let score = 0;
let showScore = document.querySelector(".show-score");
let _item = document.getElementById("item");
let _box = document.getElementById("box");
function jump() {
  score = score + 5;
  scoreBox.innerHTML = `Score : ${score}`;
  if (_item.classList != "animation-jump") {
    _item.classList.add("animation-jump");
  }
  setTimeout(() => {
    _item.classList.remove("animation-jump");
  }, 500);
}
let itemBlocked = setInterval(() => {
  let getItemTopClass = parseInt(
    window.getComputedStyle(_item).getPropertyValue("top")
  );
  let getBoxLeftClass = parseInt(
    window.getComputedStyle(_box).getPropertyValue("left")
  );
  if (
    getBoxLeftClass < 20 &&
    getBoxLeftClass > -20 &&
    getItemTopClass >= 130
  ) {
    _box.style.animation = "none";
    _box.style.animation = "block 1s infinite linear";
    road.style.animation = 'none'
    document.body.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    resultBox.classList.remove("result-box-hidden");
    showScore.innerHTML = `Your Score : ${score}`;
    console.log(resultBox);
    tryAgainGame.addEventListener("click", (e) => {
      resultBox.classList.add("result-box-hidden");
      window.location.reload();
    });
  }
}, 10);
