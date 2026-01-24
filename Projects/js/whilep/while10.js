let antrian = ["Budi", "Sari", "Andi"];
let nasabahDilayani = 0;
let adaNasabahBaru;

do {
  if (antrian.length > 0) {
    let nasabah = antrian.shift();
    nasabahDilayani++;
    console.log("Melayani nasabah: " + nasabah);
    
    if (antrian.length > 0) {
      console.log("Sisa antrian: " + antrian.length + " orang");
    } else {
      console.log("Antrian kosong.");
      adaNasabahBaru = prompt("Ada nasabah baru yang datang? (y/n): ");
      if (adaNasabahBaru === "y") {
        let namaNasabah = prompt("Nasabah baru: ");
        antrian.push(namaNasabah);
      }
    }
  }
} while (antrian.length > 0);

console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);
