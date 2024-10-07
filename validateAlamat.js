function validateAlamat(alamat) {
    // Periksa apakah alamat kosong
    if (alamat === "") {
        console.log("Alamat tidak valid, Alamat tidak boleh kosong")
      return false;
    }
  
    // Periksa apakah panjang alamat minimal 10 karakter
    if (alamat.length < 10) {
        console.log("Alamat tidak valid. Alamat harus terdiri dari minimal 10 huruf.");
      return false;
    }
  
    // Jika semua kondisi terpenuhi, alamat valid
    console.log("Alamat valid!");
    return true;

  }
  
  // Contoh penggunaan:
  let alamat = "jl.soekarno hatta, gg omega"; // Alamat Valid
  let alamat2 = "a"; // Alamat tidak valit, Alamat Tidak Boleh Kosong
  let alamat3 = ""; // Alamat tidak valid. Alamat harus terdiri dari minimal 10 huruf.
  
  validateAlamat(alamat)    // Alamat Valid
  validateAlamat(alamat2)   // Alamat tidak valit, Alamat Tidak Boleh Kosong
  validateAlamat(alamat3)   // Alamat tidak valid. Alamat harus terdiri dari minimal 10 huruf.
   