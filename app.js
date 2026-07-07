// login
function loginAccount() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    if(username === "" || password==="") {
        alert("Username dan Password tidak boleh kosong!");
        localStorage.setItem("isLogin", "false");
    }
    else {
        alert("Login Berhasil!");
        localStorage.setItem("isLogin", "true");
        window.location.href = "index.html";
    }
}