let bulan: number = 2;
let namaBulan: string;
let hariDalamBulan: number;

switch (bulan) {
  case 1:
    namaBulan = "Januari";
    hariDalamBulan = 31;
    break;
  case 2:
    namaBulan = "Februari";
    hariDalamBulan = 28;
    break;
  case 3: case 5: case 7: case 8: case 10: case 12:
    namaBulan =
      bulan === 3
        ? "Maret"
        : bulan === 5
        ? "Mei"
        : bulan === 7
        ? "Juli"
        : bulan === 8
        ? "Agustus"
        : bulan === 10
        ? "Oktober"
        : "Desember";
    hariDalamBulan = 31;
    break;
  case 4: case 6: case 9: case 11:
    namaBulan =
      bulan === 4
        ? "April"
        : bulan === 6
        ? "Juni"
        : bulan === 9
        ? "September"
        : "November";
    hariDalamBulan = 30;
    break;
  default:
    console.log("Nomor bulan tidak valid (1-12)");
    process.exit(1);
}

console.log(
  `Bulan ke-${bulan} (${namaBulan}) memiliki ${hariDalamBulan} hari`
);
export {};