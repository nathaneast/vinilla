var startBtn = document.querySelector(".button-start");
var scoreView = document.querySelector(".realScoreView");
var countView = document.querySelector(".realCountView");

var score = 0;
var count = 0;
var conNum = 9;
// 랜덤수 0~8까지라서

function endGame() {
    scoreView.innerText = score + "점 입니다!!!";
    startBtn.value = "재시작";
    count = 0;
    score = 0;
    startBtn.addEventListener("click", startGame);
}

function randomNum() {
    do {
        var ranNum = Math.floor(Math.random() * 9);
    } while (ranNum === conNum);
    conNum = ranNum;
    var holes = document.querySelector(".holes");
    var randomImgNum = holes.children[ranNum];
    return randomImgNum;
}

function startGame() {
    count++;
    if (count === 1) {
        startBtn.removeEventListener("click", startGame);
        scoreView.innerText = "게임시작!!!";
    }
    if (count <= 10) {
        countView.innerText = count + " / 10"
    }

    var ran = randomNum();
    //랜덤으로 이미지를 바꿀 대상

    //1초 후 랜덤 두더지 나옴
    var gameSetTimerId = setTimeout(function () {
        ran.src = "img/mole.jpg";
        ran.addEventListener("click", catchMole);
        var LimitTimerId = timeLimit();

        function catchMole() {
            score += 10;
            scoreView.innerText = "잡았다 요놈!!!";
            console.log(score);
            ran.removeEventListener("click", catchMole);
            ran.src = "img/hole.jpg";
            clearTimeout(LimitTimerId);
            startGame();
        }

        function timeLimit() {
            var timeId = setTimeout(function () {
                scoreView.innerText = "놓쳤당ㅠㅠ";
                ran.src = "img/hole.jpg";
                ran.removeEventListener("click", catchMole);
                startGame();
            }, 3000);
            return timeId;
        }
    }, 1000);

    //10판 후 게임 종료 
    if (count > 10) {
        clearTimeout(gameSetTimerId);
        endGame();
    }

}
startBtn.addEventListener("click", startGame);
