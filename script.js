function cekKelulusan() {
    var nomorIdentitas = document.getElementById("nomor_identitas").value;
    var hasilElement = document.getElementById("hasil");
    
    var dataSiswa = {
        "12345": "Lulus",
        "234567": "Tidak Lulus",
        "123456": "Lulus",
        "456789": "Tidak Lulus",
        "567890": "Lulus"
    };

    if (nomorIdentitas in dataSiswa) {
        hasilElement.textContent = "Status kelulusan untuk nomor identitas " + nomorIdentitas + " dinyatakan : " + dataSiswa[nomorIdentitas];
    } else {
        hasilElement.textContent = "Nomor identitas tidak ditemukan dalam daftar.";
    }
}
