const arrayValue = localStorage.getItem('arr');
localStorage.setItem('userName', null);
let countOfTimes = 0;
let arr = JSON.parse(arrayValue);
let timer;
let seconds;
function setTime(){
    document.getElementById("submit").disabled = true;
    seconds = 40;
    document.getElementById("timer").textContent = "0:40";
    timer = setInterval(() => {
        seconds--;
        const minutes =0;
        if(seconds < 10){
            document.getElementById("timer").textContent = minutes + ":" + "0" + seconds;
        }
        else{
            document.getElementById("timer").textContent = minutes + ":" + seconds;
        }
        if(seconds<=0){
            clearInterval(timer);
            document.getElementById("submit").disabled = false;
            document.getElementById("timer").style.display = "none";
            document.getElementById("tryAgain").style.display = "none";
            countOfTimes = 0;

        }
    }, 1000);
}
function chackIdanitiy(event) {
    if(countOfTimes >2){
        document.getElementById("timer").style.display = "block";
        document.getElementById("tryAgain").style.display = "block";
        setTime()
    }
    countOfTimes++;
    event.preventDefault();
    let userName = document.getElementById("pName").value;
    let password = document.getElementById("password").value;
    let exist = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].userName.trim() === userName && arr[i].password.trim() === password) {
            exist = true;
            console.log("exit: ", exist)
            break;
        }
    }
    if (userName.trim() === "" || password.trim() === "") {
        document.getElementById("notExist").innerText = "הכנס שם משתמש או סיסמא";
        document.getElementById("notExist").style.display = "block";
    }
    else if (exist) {
        document.getElementById("notExist").style.display = "none";
        window.location.href = "./html/selectGame.html";
        alert("שלום " + userName);
    }
    else {
        document.getElementById("notExist").style.display = "block";
        document.getElementById("span").style.fontSize = "30px";
    }
    localStorage.setItem('userName', JSON.stringify(userName));
}




