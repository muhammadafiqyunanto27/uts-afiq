function validateAccess(role, status) {
    // Periksa peran dan status pengguna
    if (role === 'admin') {
        console.log("akses diizinkan, Admin memiliki akses penuh")
      return true; // Admin memiliki akses penuh
    } else if (role === 'user' && status === 'active') {
        console.log("Akses diizinkan, User aktif memiliki akses terbatas")
      return true; // User aktif memiliki akses terbatas
    } else {
        console.log("Akses tidak di izinkan, Guest atau user tidak aktif tidak memiliki akses")
      return false; // Guest atau user tidak aktif tidak memiliki akses
    }
  }

  // Contoh penggunaan:
const user2 = { role: 'user', status: 'active' };
const user3 = { role: 'user', status: 'inactive' };
const user4 = { role: 'guest', status: 'active' };

console.log(validateAccess('admin','active')); // Output: akses diizinkan, Admin memiliki akses penuh true
console.log(validateAccess('admin','inactive')); // Output: akses diizinkan, Admin memiliki akses penuh true
console.log(validateAccess('user', 'active')); // Output: Akses diizinkan, User aktif memiliki akses terbatas true
console.log(validateAccess('user', 'inactive')); // Output: Akses tidak di izinkan, Guest atau user tidak aktif tidak memiliki akses false
console.log(validateAccess('guest','active')); // Output: Akses tidak di izinkan, Guest atau user tidak aktif tidak memiliki akses false