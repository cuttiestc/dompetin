// ================= LOGIN =================
function loginAccount() {
    const username = document.getElementById("usernameInput").value.trim();
    const password = document.getElementById("passwordInput").value;

    if (username === "" || password === "") {
        alert("Username dan Password tidak boleh kosong!");
        localStorage.setItem("isLogin", "false");
    }
    else {
        localStorage.setItem("username", username);
        localStorage.setItem("isLogin", "true");
        alert("Login Berhasil!");
        window.location.href = "beranda.html";
        return;
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
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");

    if (hamburger && sidebar) {
        hamburger.addEventListener("click", function () {
            sidebar.classList.toggle("open");
        });
    }
});