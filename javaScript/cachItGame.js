
const arrayValue = localStorage.getItem('userName');
console.log(arrayValue)
const uName = JSON.parse(arrayValue)
document.getElementsByClassName('userName')[0].textContent = "היי, " + uName;

function logOut(){
    alert("בוצעה התנתקות");
    window.location.href = "../index.html";
}

let score=0;
let changePos;
let arr=[document.getElementById('div1'),document.getElementById('div4'),document.getElementById('div3'),document.getElementById('div2')];


let timerDisplay = document.getElementById('timer');
let timer;
let seconds = 40;
// document.getElementById("eix").addEventListener("click", clickOnX());
// clickOnX();
function clickOnX(){
    document.getElementById("insraction").style.display = "none";
    setTime();
    startGame();
}

function setTime(){
    seconds = 30;
    timerDisplay.textContent = "0:30";
    timer = setInterval(() => {
        seconds--;
        const minutes =0;
        if(seconds < 10){
            timerDisplay.textContent = minutes + ":" + "0" + seconds;
        }
        else{
            timerDisplay.textContent = minutes + ":" + seconds;
        }
        if(seconds<=0){
            clearInterval(timer);
            clearInterval(changePos);
                let gameOver = document.createElement('div');
                gameOver.style.width = "40vw";
                gameOver.style.height = "10vh";
                gameOver.style.fontWeight="bold"
                gameOver.style.textAlign = "center";
                gameOver.style.justifyContent = "center";
                gameOver.textContent = "הזמן נגמר!!";
                gameOver.style.fontSize = "80px";
                gameOver.style.color = "#c9377b";
                document.getElementById("gameArea").appendChild(gameOver)
                document.getElementById("countiner").style.display="none";
                let restart = document.createElement('button');
                restart.style.width = "10vw";
                restart.style.height = "5vh";
                restart.textContent = "משחק חדש";
                restart.addEventListener("click", function(){
                    window.location.href = "./cachItGame.html";
                });
                document.getElementById("gameArea").appendChild(restart);
                // timer.style.fontSize="70px";
                // timer.style.color="pink";
                let arr = [];
                if(!JSON.parse(localStorage.getItem('arrScores')))
                {
                    localStorage.setItem('arrScores', JSON.stringify(arr));
                    arr.push({"uName": JSON.parse(localStorage.getItem('userName')), "score": score});
                }
                else{
                    arr = JSON.parse(localStorage.getItem('arrScores'));
                    arr.push({"uName": JSON.parse(localStorage.getItem('userName')), "score": score});
                }
                localStorage.setItem('arrScores', JSON.stringify(arr));

        }
    }, 1000);
}

function startGame() {
        changePos = setInterval(()=>{
            swapDivs();
        },1500);
  }

function increaseScore() {
    clearInterval(changePos);
    score+=5; 
    document.getElementById('score').innerHTML = 'ציון: ' + score;
    swapDivs();
    changePos = setInterval(()=>{
        swapDivs();
    },1500);
}
function decreaseScore() {
    clearInterval(changePos);
    score-=5; 
    document.getElementById('score').innerHTML = 'ציון: ' + score; 
    swapDivs();
    changePos = setInterval(()=>{
        swapDivs();
    },1500);
}
function swapDivs(){
    var g=Math.floor(Math.random()*(arr.length));
    var h=Math.floor(Math.random()*(arr.length));
    var z=Math.floor(Math.random()*(arr.length));
    while (h === g || h === z) {
        h = Math.floor(Math.random() * (arr.length));
    }
    while (z === g || z === h) {
        z = Math.floor(Math.random() * (arr.length));
    }
    countiner=document.getElementById('countiner');

    console.log(arr[g]);
    console.log(countiner);

    countiner.insertBefore(arr[g],arr[z]);
    countiner.insertBefore(arr[h],arr[z]);
}