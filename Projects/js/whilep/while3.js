const prompt = require("prompt-sync")();

let pilihan;

while (pilihan !== 4) {
  console.log("=== MENU KALKULATOR ===");
  console.log("1. Tambah");
  console.log("2. Kurang");
  console.log("3. Kali");
  console.log("4. Keluar");

  pilihan = Number(prompt("Pilih menu (1-4): "));

  switch (pilihan) {
    case 1:
      console.log("Anda memilih Tambah");
      break;
    case 2:
      console.log("Anda memilih Kurang");
      break;
    case 3:
      console.log("Anda memilih Kali");
      break;
    case 4:
      continue;
    default:
      console.log("Pilihan tidak valid");
  }
}

console.log("Terima kasih telah menggunakan program!");
