const arrayValue = localStorage.getItem('arr');
localStorage.setItem('userName', null);

let arr = JSON.parse(arrayValue);
function chackIdanitiy(event) {
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
        window.location.href = "./html/selectGame.html";
        alert("שלום " + userName);
    }
    else {
        document.getElementById("notExist").style.display = "block";
        document.getElementById("span").style.fontSize = "30px";
    }
    localStorage.setItem('userName', JSON.stringify(userName));
}




