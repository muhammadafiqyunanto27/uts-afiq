function validateName(name) {
    // Periksa apakah nama kosong
    if (name === "") {
        console.log("Nama tidak valid,nama tidak boleh kosong")
      return false;
    }
  
    // Periksa apakah panjang nama minimal 3 karakter
    if (name.length < 3) {
        console.log("Nama tidak valid, Nama harus terdiri dari minimal 3 huruf.");
      return false;
    }
  
    // Jika semua kondisi terpenuhi, nama valid
    console.log("Nama valid!");
    return true;

  }
  
  // Contoh penggunaan:
  let nama = "ali"; // Nama Valid
  let nama2 = ""; // nama tidak valid, Nama Tidak Boleh Kosong
  let nama3 = "a"; // Nama tidak valid, Nama harus terdiri dari minimal 3 huruf.
  
  validateName(nama)  // Nama Valid
  validateName(nama2)  // nama tidak valid, Nama Tidak Boleh Kosong
  validateName(nama3)   // Nama tidak valid, Nama harus terdiri dari minimal 3 huruf.
   