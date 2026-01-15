const prompt = require('prompt-sync')();

let angka;

while (true) {
  angka = Number(prompt("Masukkan angka 1-10: "));

  if (angka >= 1 && angka <= 10) {
    break;
  } else {
    console.log("Input tidak valid, masukkan angka 1-10");
  }
}

console.log("Angka valid yang dimasukkan: " + angka);
