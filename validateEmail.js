function validateEmail(email) {
    // Periksa apakah email kosong
    if (email === "") {
        console.log("email tidak valid, email tidak boleh kosong")
      return false;
    }
  
    // Periksa panjang minimal email
    if (email.length < 5) {
        console.log("email tidak valid, email tidak kurang dri 5 karakter")
      return false;
    }
  
    // Periksa keberadaan karakter '@'
    if (!email.includes("@")) {
        console.log("email tidak valid, tidak mengandung @")
      return false;
    }
  
    // Jika semua kondisi terpenuhi, email dianggap valid
    console.log("email valid")
    return true;
  }

  let email = "user@example.com";
  let email2 = "user@com";
  let email3 = "user";
  let email4 = "";
  let email5 = "user.com";

  validateEmail(email) //email valid
  validateEmail(email2) //email valid
  validateEmail(email3) //email tidak valid, email tidak kurang dri 5 karakter
  validateEmail(email4) //email tidak valid, email tidak boleh kosong
  validateEmail(email5) // email tidak valid, tidak mengandung @