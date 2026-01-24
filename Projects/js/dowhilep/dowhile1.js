const prompt = require("prompt-sync")()

let angka;
let lanjut;

do {
    angka = prompt("Masukkan angka: ")
    console.log(`Kuadrat dari ${angka} adalah ${angka * angka}`)
    lanjut = prompt("Apakah anda ingin melanjutkan? (y/n): ")
} while (lanjut === "y")
console.log("Terima kasih telah menggunakan program!");