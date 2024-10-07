function validateNumber(nomorHp) {
    // Periksa apakah nomor HP kosong
    if (nomorHp === "") {
        console.log("Nomor HP tidak valid. nomor tidak boleh kosong.")
      return false;
    }
  
    // Periksa panjang nomor HP
    if (nomorHp.length < 10 || nomorHp.length > 13) {
        console.log("Nomor HP tidak valid. Pastikan nomor HP terdiri dari 10-13 angka")
      return false;
    }
  
    // Periksa apakah semua karakter adalah angka
    for (let i = 0; i < nomorHp.length; i++) {
        if (isNaN(nomorHp[i])) {
            console.log("Nomor HP tidak valid. Pastikan nomor tidak terdapat huruf")
          return false;
        }
      }
  
    // Jika semua kondisi terpenuhi, nomor HP valid
    console.log("Nomor HP valid!");
    return true;
  }

  let nomorHP = "081298374409"; // Nomor Hp valid
  let nomorHP2 = "0298748" // Nomor HP tidak valid. Pastikan nomor HP terdiri dari 10-13 angka
  let nomorHP3 = "" // Nomor HP tidak valid. nomor tidak boleh kosong.
  let nomorHP4 = "376842gygfsyu" // Nomor HP tidak valid. Pastikan nomor tidak terdapat huruf

  validateNumber(nomorHP)   // Nomor Hp valid
  validateNumber(nomorHP2)  // Nomor HP tidak valid. Pastikan nomor HP terdiri dari 10-13 angka
  validateNumber(nomorHP3)  // Nomor HP tidak valid. nomor tidak boleh kosong.
  validateNumber(nomorHP4)  // Nomor HP tidak valid. Pastikan nomor tidak terdapat huruf