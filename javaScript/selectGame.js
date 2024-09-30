const arrayValue = localStorage.getItem('userName');
console.log(arrayValue)
const uName = JSON.parse(arrayValue)
document.getElementsByClassName('userName')[0].textContent = "היי, " + uName;