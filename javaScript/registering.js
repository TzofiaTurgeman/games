let arr = JSON.parse(localStorage.getItem('arr'));

function runSubmit(event) {
    event.preventDefault();
    var userName = document.getElementById("pName").value;
    var password = document.getElementById("password").value;
    var exist = false;
    if (arr == null) {
        exist = true;
        arr = [];
    }else if (userName.trim() === "" || password.trim() === "") {
        document.getElementById("notExist").innerText = "הכנס שם משתמש או סיסמא";
        document.getElementById("notExist").style.display = "block";
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].userName.trim() === userName.trim()) {
                document.getElementById("notExist").style.display = "block";
                document.getElementById("notExist").innerText = "שם המשתמש תפוס ";
                exist=false;
                break;
            }
            else if (arr[i].password.trim() === password.trim()) {
                document.getElementById("notExist").style.display = "block";
                document.getElementById("notExist").innerText = "הסיסמא תפוסה  ";
                exist=false;
                break;
            }
            else { exist = true }
        }
    }
    if (exist) {
        arr.push({ "userName": userName, "password": password })
        localStorage.setItem('arr', JSON.stringify(arr));
        localStorage.setItem('userName', JSON.stringify(userName));
        window.location.href = "../html/selectGame.html";
        alert("ההרשמה בוצעה בהצלחה ");
    }

}