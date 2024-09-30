arr = JSON.parse(localStorage.getItem('arrScores'));
let place1 = {minutes:0, seconds:0};
let place2 = {minutes:0, seconds:0};
let place3 = {minutes:0, seconds:0};
for(let i = 3; i < arr.length; i++){
    if(arr[i].minutes > place1.minutes){
        place3 = {...place2};
        place2 = {...place1};
        place1 = {...arr[i]};
    }
    else if(arr[i].minutes < place1.minutes){
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
        if(arr[i].seconds > place1.seconds){
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
    if(otherTime.minutes > place2.minutes){
        place3 = {...place2};
        return true;
    }
    else{
        if(otherTime.seconds > place2.seconds){
            place3 = {...place2};
            return true;
        }
    }
    return false;
}
function checkWithPlace3(){
    if(otherTime.minutes > place3.minutes){
        return true;
    }
    else{
        if(otherTime.seconds > place3.seconds){
            return true;
        }
    }
    return false;
}