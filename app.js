var startBtn = document.querySelector(".button-start");
//시작 버튼

var score = 0;
//점수
var count = 0;
//게임 횟수 10판 횟수
var outMole = false;
//두더지 나왔는지


function changeImg(callbackFunc) {
    var ranNum = Math.floor(Math.random() * 9) + 1;
    // 1~9 랜덤수 
    var randomImgNum = document.querySelector(`.hole-${ranNum}`);
    //이미지 바꿀 대상

    callbackFunc(randomImgNum);
    //1초 후 두더지 나타남
    //3초 제한시간 잼
}

function timeLimit(time) {
    setTimeout(function () {
        console.log(time);
    }, time * 1000);
    return time;
}

function a() {
    // ran.addEventListener("click", function () {
    // ran.src = "img/hole.jpg";
    score += 100;
    console.log(score);
    outMole = true;
    this.removeEventListener("click", arguments.callee);
    // 클릭=> 이벤트 실행 ,이벤트제거
    // });
}

function startGame() {
    count++;

    changeImg(function (ran) {
        setTimeout(function () {
            ran.src = "img/mole.jpg";
            ran.addEventListener("click", a);
        }, 1000);


    });

    // setTimeout(function () {
    //     outMole = true;
    //     ran.src = "img/mole.jpg";

    // ran.addEventListener("click", function () {
    // ran.src = "img/hole.jpg";
    // score += 100;
    // console.log(score);
    // outMole = false;
    // // this.removeEventListener("click", arguments.callee);
    // 클릭=> 이벤트 실행 ,이벤트제거
    // });




    // setTimeout(function () {
    //     outMole = true;
    //     ran.src = "img/mole.jpg";
    //     ran.addEventListener("click", a);

    //     setTimeout(function () {
    //         ran.src = "img/hole.jpg";
    //         outMole = false;
    //         // ran.removeEventListener("click", function(event) {
    //         ran.removeEventListener("click", a);
    //     }, 3000);
    // }, 1000);





    // var time;
    // for (time = 1; time <= 3; time++) {
    //     timeLimit(time);

    //     if (time === 1) {
    //         console.log(123);
    //         ran.src = "img/mole.jpg";
    //         ran.addEventListener("click", a);
    //     };

    //     if (outMole === true) {
    //         ran.src = "img/hole.jpg";
    //         outMole = false;
    //         break;
    //     };

    // }
    // ran.src = "img/hole.jpg";
    // ran.removeEventListener("click", a);





    //     }, 3000);
    // }, 1000);
    // var imgPromise = new Promise((resolve, reject) => {
    //     setTimeout(function () {
    //         randomImgNum.src = "img/mole.jpg";
    //     }, 1000);
    // });

    // imgPromise.then((result) => {
    //     console.log("123");
    // })
}

startBtn.addEventListener("click", startGame);
