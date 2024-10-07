function validateBirthdate(birthdate) {
    // Ubah string tanggal lahir menjadi objek Date
    const birthdateObj = new Date(birthdate);
  
    // Ubah tanggal hari ini menjadi objek Date
    const today = new Date();


  
    // Periksa apakah tanggal lahir valid (tidak NaN)
    if (isNaN(birthdateObj.getTime())) {
        console.log("Tanggal lahir tidak valid. Pastikan format tanggal benar dan tanggal lahir tidak lebih dari hari ini.");
      return false;
    }

    if (birthdateObj === "") {
        console.log("Tanggal lahir tidak valid. tanggal lahir tidak boleh kosong")
      return false;
    }
  
    // Periksa apakah tanggal lahir lebih kecil dari hari ini
    if (birthdateObj > today) {
      console.log("Tanggal lahir tidak valid. masa depan.");
      return false;
    }
  
    // Jika semua kondisi terpenuhi, tanggal lahir valid
    console.log("Tanggal lahir valid!");
    return true;
  }

  let birthdate = "2007-01-17"; //Tanggal lahir valid!
  let birthdate2 = "2025-01-17"; //Tanggal tidak lahir valid!. masa depan
  let birthdate3 = ""; //Tanggal tidak lahir valid!. tidak boleh kosong

validateBirthdate(birthdate)   //Tanggal lahir valid!
validateBirthdate(birthdate2)   //Tanggal tidak lahir valid!. masa depan
validateBirthdate(birthdate3)   //Tanggal tidak lahir valid!. tidak boleh kosong