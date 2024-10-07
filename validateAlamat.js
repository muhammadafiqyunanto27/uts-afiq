function validateAlamat(alamat) {
    // Periksa apakah alamat kosong
    if (alamat === "") {
      return false;
    }
  
    // Periksa apakah panjang alamat minimal 10 karakter
    if (alamat.length < 10) {
      return false;
    }
  
    // Jika semua kondisi terpenuhi, alamat valid
    return true;
  }
  
  // Contoh penggunaan:
  let alamat = "jl.soekarno hatta, gg omega"; // Alamat Valid
  let alamat2 = "a"; // Alamat tidak valit, Alamat Tidak Boleh Kosong
  let alamat3 = ""; // Alamat tidak valid. Alamat harus terdiri dari minimal 10 huruf.
  
  if (validateAlamat(alamat)) {
    console.log("Alamat valid!");
  } else if (alamat === "") {
    console.log("Alamat tidak valid, Alamat tidak boleh kosong")
  } else {
    console.log("Alamat tidak valid. Alamat harus terdiri dari minimal 10 huruf.");
  }
   