function cekKelulusan() {
    var nomorIdentitas = document.getElementById("nomor_identitas").value;
    var hasilElement = document.getElementById("hasil");
    
    var dataSiswa = {
        "4337857201230039": "Tidak Lulus",
        "4337857201230028": "Lulus",
        "4337857201230029": "Lulus",
        "4337857201230072": "Lulus",
        "4337857201230062": "Lulus"
    };

    if (nomorIdentitas in dataSiswa) {
        hasilElement.textContent = "Status kelulusan untuk nomor identitas " + nomorIdentitas + " dinyatakan : " + dataSiswa[nomorIdentitas];
    } else {
        hasilElement.textContent = "Nomor identitas tidak ditemukan dalam daftar.";
    }
}
