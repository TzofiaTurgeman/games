const arrayValue = localStorage.getItem('userName');
const uName = JSON.parse(arrayValue)
document.getElementsByClassName('userName')[0].textContent = "היי, " + uName;

function logOut(){
    alert("בוצעה התנתקות");
    window.location.href = "../index.html";
}

arr = JSON.parse(localStorage.getItem('arrTimes'));
let place1 = {...arr[0]};
let place2 = {minutes:60, seconds:0};
let place3 = {minutes:60, seconds:0};
for(let i = 1; i < arr.length; i++){
    if(arr[i].minutes < place1.minutes){
        place3 = {...place2};
        place2 = {...place1};
        place1 = {...arr[i]};
    }
    else if(arr[i].minutes > place1.minutes){
        if(checkWithPlace2(arr[i]) === true){
            place3 = {...place2};
            place2 = {...arr[i]};
        }
        else{
            if(checkWithPlace3(arr[i]) === true){
                place3 = {...arr[i]};
            }
        }
    }
    else{
        if(arr[i].seconds < place1.seconds){
            place3 = {...place2};
            place2 = {...place1};
            place1 = {...arr[i]};
        }
        else{
            if(checkWithPlace2(arr[i]) === true){
                place3 = {...place2};
                place2 = {...arr[i]};
            }
            else{
                if(checkWithPlace3(arr[i]) === true){
                    place3 = {...arr[i]};
                }
            }
        }
    }
}
function checkWithPlace2(otherTime){
    if(otherTime.minutes < place2.minutes){
        place3 = {...place2};
        return true;
    }
    else{
        if(otherTime.seconds < place2.seconds){
            place3 = {...place2};
            return true;
        }
    }
    return false;
}
function checkWithPlace3(otherTime){
    if(otherTime.minutes < place3.minutes){
        return true;
    }
    else{
        if(otherTime.seconds < place3.seconds){
            return true;
        }
    }
    return false;
}
document.getElementById("uName-place1").textContent = place1.uName;
if(document.getElementById("uName-place1").seconds < 10){
    document.getElementById("time-place1").textContent = place1.minutes + ":0"  + place1.seconds;
}
else{
    document.getElementById("time-place1").textContent = place1.minutes + ":"  + place1.seconds;
}

document.getElementById("uName-place2").textContent = place2.uName;
if(document.getElementById("uName-place2").seconds < 10){
    document.getElementById("time-place2").textContent = place2.minutes + ":0"  + place2.seconds;
}
else{
    document.getElementById("time-place2").textContent = place2.minutes + ":"  + place2.seconds;
}

document.getElementById("uName-place3").textContent = place3.uName;
if(document.getElementById("uName-place3").seconds < 10){
    document.getElementById("time-place3").textContent = place3.minutes + ":0"  + place3.seconds;
}
else{
    document.getElementById("time-place3").textContent = place3.minutes + ":"  + place3.seconds;
}

let score1 = {score: 0};
let score2 = {score: 0};
let score3 = {score: 0};
let arrScores = JSON.parse(localStorage.getItem('arrScores'));
for(let i = 0; i < arrScores.length; i++){
    if(arrScores[i].score > score1.score){
        score3 = {...score2};
        score2 = {...score1};
        score1 = {...arrScores[i]};
    }
    else if(arrScores[i].score < score1.score){
        if(checkWithScore2(arrScores[i])){
            score3 = {...score2};
            score2 = {...arrScores[i]};
        }
        else{
            if(checkWithScore3(arrScores[i])){
                score3 = {...arrScores[i]};
            }
        }
    }
    else{
        score3 = {...score2};
        score2 = {...arrScores[i]};
    }
}
function checkWithScore2(otherScore){
    if(otherScore.score > score2.score){
        return true;
    }
}
function checkWithScore3(otherScore){
    if(otherScore.score > score3.score){
        return true;
    }
}
document.getElementById("uName-score1").textContent = score1.uName;
document.getElementById("score1").textContent = score1.score;

document.getElementById("uName-score2").textContent = score2.uName;
document.getElementById("score2").textContent = score2.score;

document.getElementById("uName-score3").textContent = score3.uName;
document.getElementById("score3").textContent = score3.score;