function validateName(name) {
    // Periksa apakah nama kosong
    if (name === "") {
      return false;
    }
  
    // Periksa apakah panjang nama minimal 3 karakter
    if (name.length < 3) {
      return false;
    }
  
    // Jika semua kondisi terpenuhi, nama valid
    return true;
  }
  
  // Contoh penggunaan:
  let nama = "ali"; // Nama Valid
  let nama2 = "a"; // nama tidak valid, Nama Tidak Boleh Kosong
  let nama3 = ""; // Nama tidak valid, Nama harus terdiri dari minimal 3 huruf.
  
  if (validateName(nama)) {
    console.log("Nama valid!");
  } else if (nama === "") {
    console.log("Nama tidak valid,nama tidak boleh kosong")
  } else {
    console.log("Nama tidak valid, Nama harus terdiri dari minimal 3 huruf.");
  }
   