// ================= LOGIN =================
function loginAccount() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    if (username === "" || password === "") {
        alert("Username dan Password tidak boleh kosong!");
        return;
    }

    localStorage.setItem("isLogin", "true");
    alert("Login berhasil!");
}

// ================= DATA TRANSAKSI =================
function getTransaksi() {
    return [
        {
            tanggal: "2026-06-20",
            deskripsi: "Bensin motor",
            kategori: "Transportasi",
            tipe: "expense",
            jumlah: 50000
        },
        {
            tanggal: "2026-06-15",
            deskripsi: "Freelance desain poster",
            kategori: "Pemasukan",
            tipe: "income",
            jumlah: 300000
        },
        {
            tanggal: "2026-06-10",
            deskripsi: "Nongkrong kopi bareng temen",
            kategori: "Hiburan",
            tipe: "expense",
            jumlah: 45000
        },
        {
            tanggal: "2026-06-06",
            deskripsi: "Beli kuota internet",
            kategori: "Kebutuhan",
            tipe: "expense",
            jumlah: 100000
        },
        {
            tanggal: "2026-06-04",
            deskripsi: "Makan siang warteg",
            kategori: "Makanan",
            tipe: "expense",
            jumlah: 25000
        },
        {
            tanggal: "2026-06-02",
            deskripsi: "Uang saku bulanan",
            kategori: "Pemasukan",
            tipe: "income",
            jumlah: 1500000
        }
    ];
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