const prompt = require("prompt-sync")()

let password;
let valid = false;

do {
  password = prompt("Buat password Anda:")
  console.log((valid = password.length >= 6 && /\d/.test(password)) ? "Password Valid!" : "Password tidak valid! Harus minimal 6 karakter dan mengandung angka.")
} while (!valid)

console.log("Password berhasil dibuat: " + password);