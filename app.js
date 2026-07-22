// ================= AUTH =================
function registerAccount() {
    const name = document.getElementById("nameInput").value.trim();
    const username = document.getElementById("usernameRegisterInput").value.trim();
    const password = document.getElementById("passwordRegisterInput").value;
    const confirmPassword = document.getElementById("confirmPasswordInput").value;

    if (!name || !username || !password || !confirmPassword) {
        alert("Semua field harus diisi!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Konfirmasi password tidak cocok!");
        return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(user => user.username === username);

    if (userExists) {
        alert("Username sudah terdaftar, silakan pilih username lain.");
        return;
    }

    existingUsers.push({
        name: name,
        username: username,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("isLogin", "false");
    localStorage.setItem("username", "");

    alert("Sign Up Berhasil! Silakan login terlebih dahulu.");
    window.location.href = "login.html";
}

function loginAccount() {
    const username = document.getElementById("usernameInput").value.trim();
    const password = document.getElementById("passwordInput").value;

    if (username === "" || password === "") {
        alert("Username dan Password tidak boleh kosong!");
        localStorage.setItem("isLogin", "false");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (!matchedUser) {
        alert("Username atau password salah! Silakan daftar terlebih dahulu.");
        localStorage.setItem("isLogin", "false");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("isLogin", "true");
    alert("Login Berhasil!");
    window.location.href = "beranda.html";
}

function protectAppPages() {
    const currentPage = window.location.pathname.split('/').pop();
    const protectedPages = ['beranda.html', 'anggarantrans.html', 'laporan.html'];
    const isAuthenticated = localStorage.getItem("isLogin") === "true";

    if (protectedPages.includes(currentPage) && !isAuthenticated) {
        window.location.href = "login.html";
    }
}

// ================= DATA TRANSAKSI =================
function getTransaksi() {
    let data = JSON.parse(localStorage.getItem("transaksi"));

    if (data && data.length > 0) {
        return data;
    }

    data = [
        {
            id: 1,
            tanggal: "2026-06-20",
            deskripsi: "Bensin motor",
            kategori: "Transportasi",
            tipe: "expense",
            jumlah: 50000
        },
        {
            id: 2,
            tanggal: "2026-06-15",
            deskripsi: "Freelance desain poster",
            kategori: "Pemasukan",
            tipe: "income",
            jumlah: 300000
        },
        {
            id: 3,
            tanggal: "2026-06-10",
            deskripsi: "Nongkrong kopi bareng temen",
            kategori: "Hiburan",
            tipe: "expense",
            jumlah: 45000
        },
        {
            id: 4,
            tanggal: "2026-06-06",
            deskripsi: "Beli kuota internet",
            kategori: "Kebutuhan",
            tipe: "expense",
            jumlah: 100000
        },
        {
            id: 5,
            tanggal: "2026-06-04",
            deskripsi: "Makan siang warteg",
            kategori: "Makanan",
            tipe: "expense",
            jumlah: 25000
        },
        {
            id: 6,
            tanggal: "2026-06-02",
            deskripsi: "Uang saku bulanan",
            kategori: "Pemasukan",
            tipe: "income",
            jumlah: 1500000
        }
    ];

    localStorage.setItem("transaksi", JSON.stringify(data));
    return data;
}

// ================= SIMPAN TRANSAKSI =================
function saveTransaksi(data) {
    localStorage.setItem("transaksi", JSON.stringify(data));
}

// ================= FORMAT RUPIAH =================
function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

// ================= FORMAT TANGGAL =================
function formatTanggal(tanggal) {
    return new Date(tanggal).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}

// ================= DATA ANGGARAN =================
function getBudget() {
    return JSON.parse(localStorage.getItem("budget")) || [];
}

function saveBudget(data) {
    localStorage.setItem("budget", JSON.stringify(data));
}

// ================= MENU MOBILE =================
document.addEventListener("DOMContentLoaded", function () {
    protectAppPages();

    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");

    if (hamburger && sidebar) {
        hamburger.addEventListener("click", function () {
            sidebar.classList.toggle("open");
        });
    }
});