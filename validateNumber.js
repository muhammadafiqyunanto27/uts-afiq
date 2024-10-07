function validateNumber(nomorHp) {
    // Periksa apakah nomor HP kosong
    if (nomorHp === "") {
      return false;
    }
  
    // Periksa panjang nomor HP
    if (nomorHp.length < 10 || nomorHp.length > 13) {
      return false;
    }
  
    // Periksa apakah semua karakter adalah angka
    for (let i = 0; i < nomorHp.length; i++) {
        if (isNaN(nomorHp[i])) {
          return false;
        }
      }
  
    // Jika semua kondisi terpenuhi, nomor HP valid
    return true;
  }

  let nomorHP = "081298374409"; // Nomor Hp valid
  let nomorHP2 = "0298748" // Nomor HP tidak valid. Pastikan nomor HP terdiri dari 10-13 angka dan tidak boleh kosong.
  let nomorHP3 = "" // Nomor HP tidak valid. Pastikan nomor HP terdiri dari 10-13 angka dan tidak boleh kosong.
  let nomorHP4 = "376842gygfsyu" // Nomor HP tidak valid. Pastikan nomor HP terdiri dari 10-13 angka dan tidak boleh kosong.

if (validateNumber(nomorHP)) {
  console.log("Nomor HP valid!");
} else {
  console.log("Nomor HP tidak valid. Pastikan nomor HP terdiri dari 10-13 angka dan tidak boleh kosong.");
}