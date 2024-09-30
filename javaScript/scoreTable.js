const arrayValue = localStorage.getItem('userName');
console.log(arrayValue)
const uName = JSON.parse(arrayValue)
document.getElementsByClassName('userName')[0].textContent = "היי, " + uName;
arr = JSON.parse(localStorage.getItem('arrScores'));
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
console.log(place1);
console.log(place2);
console.log(place3);
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