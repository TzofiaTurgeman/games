var score=0;
var i=0;
var arr=[document.getElementById('div1'),document.getElementById('div4'),document.getElementById('div3'),document.getElementById('div2')];
function startGame() {
    if( score>100){
        i+=1.25
    }else{
        i++;
    }
    if(i>2){
        swapDivs();
    }
        setTimeout(startGame, 1000);
  }

function increaseScore() {
    score+=5; 
    document.getElementById('score').innerHTML = 'score: ' + score;
    swapDivs();
    i=0;
}
function decreaseScore() {
    score-=5; 
    document.getElementById('score').innerHTML = 'score: ' + score; 
    swapDivs();
    i=0;
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