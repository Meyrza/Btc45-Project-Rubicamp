const prompt = require("prompt-sync")()

let saldo = 100000;
let pilihan;
let lanjut;

do {
  console.log(`=== ATM MENU ===
1. Cek Saldo
2. Tarik Tunai
3. Setor Tunai
4. Keluar`)

  pilihan = prompt("Pilih menu: ")

  pilihan == 1 ? console.log(`Saldo Anda: Rp.${saldo}`) :
    pilihan == 2 ? (jumlah => (saldo -= jumlah, console.log(`Penarikan Berhasil Saldo: Rp.${saldo}`)))(+prompt("Masukkan jumlah: ")) :
      pilihan == 3 ? (jumlah => (saldo += jumlah, console.log(`Setoran Berhasil Saldo: Rp.${saldo}`)))(+prompt("Masukkan jumlah: ")) :
        pilihan == 4 ? lanjut = 'n' : console.log("Menu tidak valid!")

  lanjut = pilihan == 4 ? 'n' : prompt("Apakah ingin melakukan transaksi lain? (y/n):")

} while (lanjut === "y")
console.log("Terima kasih telah menggunakan ATM!");