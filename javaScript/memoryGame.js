const arrayValue = localStorage.getItem('userName');
console.log(arrayValue)
const uName = JSON.parse(arrayValue)
document.getElementsByClassName('userName')[0].textContent = "היי, " + uName;
let timerDisplay = document.getElementById('timer');
let timer;
let seconds = 0;
setTime();
let removedCard=0;
function setTime(){
    seconds = 0;
    timerDisplay.textContent = "0:00";
    timer = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        if(remainingSeconds < 10){
            timerDisplay.textContent = minutes + ":" + "0" + remainingSeconds;
        }
        else{
            timerDisplay.textContent = minutes + ":" + remainingSeconds;
        }
    }, 1000);
}

let sum = 0;

let cards = document.getElementsByClassName("flip-card")
for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function(){
    this.querySelector('.card').classList.toggle("flipped");
    sum++;
    if(sum === 2){
        sum = 0;
        compareImg();
    }
});
}
let images = ["../pic/apple1.png", "../pic/apple1.png", "../pic/fish.png", "../pic/fish.png", "../pic/goodYear.png", "../pic/goodYear.png", "../pic/honey1.png", "../pic/honey1.png", "../pic/pomegranate.png", "../pic/pomegranate.png", "../pic/shofar.png", "../pic/shofar.png"];
let backCards = document.getElementsByClassName("img-memory")
for(let i = 0; i < backCards.length; i++){
    let index = Math.floor(Math.random() * (images.length - 0.01));
    backCards[i].src = images[index];
    images.splice(index, 1);
}

function compareImg(){
    let cardsToCompare = document.getElementsByClassName("flipped");
    if(cardsToCompare[0].getElementsByClassName("img-memory")[0].src == cardsToCompare[1].getElementsByClassName("img-memory")[0].src)
    {
        removedCard+=2;
        setTimeout(() => {
        cardsToCompare[0].parentElement.removeChild(cardsToCompare[0])},1000);
        setTimeout(() => {
        cardsToCompare[0].parentElement.removeChild(cardsToCompare[0])},1000);
        
    }
    else{
            setTimeout(() => {
                cardsToCompare[0].classList.remove('flipped')

            }, 1000);
            setTimeout(() => {
                cardsToCompare[0].classList.remove('flipped')

            }, 1000);
    }
    if(removedCard===16){
        clearInterval(timer)
        document.getElementsByClassName("gameArea")[0].innerHTML = "";
        while(document.getElementsByClassName("gameArea")[0].firstChild){
            document.getElementsByClassName("gameArea")[0].removeChild(document.getElementsByClassName("gameArea")[0].firstChild)
        }
        let gameOver = document.createElement('div');
        gameOver.style.width = "100vw";
        gameOver.style.height = "10vh";
        gameOver.style.textAlign = "center";
        gameOver.style.justifyContent = "center";
        gameOver.style.backgroundColor = "ligth-pink";
        gameOver.style.fontWeight="bold"
        gameOver.textContent = "כל הכבוד!!";
        gameOver.style.fontSize = "80px";
        gameOver.style.color = "pink";
        document.getElementsByClassName("gameArea")[0].appendChild(gameOver)
        // timer.style.fontSize = "70px";
        // timer.style.color = "pink";
        let restart = document.createElement('button');
        restart.style.width = "10vw";
        restart.style.height = "5vh";
        restart.textContent = "משחק חדש";
        restart.addEventListener("click", function(){
            window.location.href = "./memoryGame.html";
        });
        document.getElementsByClassName("gameArea")[0].appendChild(restart)
        let arr = [];
        if(!JSON.parse(localStorage.getItem('arrScores')))
        {
            localStorage.setItem('arrScores', JSON.stringify(arr));
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            arr.push({"uName": JSON.parse(localStorage.getItem('userName')), "minutes": minutes, "seconds": remainingSeconds});
            localStorage.setItem('arrScores', JSON.stringify(arr));
        }
        else{
            arr = JSON.parse(localStorage.getItem('arrScores'));
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            arr.push({"uName": JSON.parse(localStorage.getItem('userName')), "minutes": minutes, "seconds": remainingSeconds});
            localStorage.setItem('arrScores', JSON.stringify(arr));
        }
    }
}

