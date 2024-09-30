const arrayValue = localStorage.getItem('userName');
console.log(arrayValue)
document.getElementsByClassName('userName')[0].textContent = "היי," + arrayValue;