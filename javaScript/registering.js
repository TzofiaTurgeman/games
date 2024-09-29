let arr = JSON.parse(localStorage.getItem('arr'));
function runSubmit(event) {
    event.preventDefault();
    var userName = document.getElementById("pName").value;
    var password = document.getElementById("password").value;
    var exist = false;
    if (arr == null) {
        exist = true;
        arr = [];
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].userName.trim() === userName.trim()) {
                document.getElementById("notExist").style.display = "block";
                document.getElementById("notExist").innerText = "שם המשתמש תפוס ";
            }
            else if (arr[i].password.trim() === password.trim()) {
                document.getElementById("notExist").style.display = "block";
                document.getElementById("notExist").innerText = "הסיסמא תפוסה  ";
            }
            else { exist = true }
        }
    }
    if (exist) {
        arr.push({ "userName": userName, "password": password })
        localStorage.setItem('arr', JSON.stringify(arr));
        alert("ההרשמה בוצעה בהצלחה ");
    }
}