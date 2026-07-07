// login
function loginAccount() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    if(username === "" || password==="") {
        alert("Username dan Password tidak boleh kosong!");
        localStorage.setItem("isLogin", "true");
    }
}