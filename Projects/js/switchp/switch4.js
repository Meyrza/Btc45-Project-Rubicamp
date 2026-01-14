let bulan = 2;

let bulanData = [
  { nama: "Januari", hari: 31 },
  { nama: "Februari", hari: 28 },
  { nama: "Maret", hari: 31 },
  { nama: "April", hari: 30 },
  { nama: "Mei", hari: 31 },
  { nama: "Juni", hari: 30 },
  { nama: "Juli", hari: 31 },
  { nama: "Agustus", hari: 31 },
  { nama: "September", hari: 30 },
  { nama: "Oktober", hari: 31 },
  { nama: "November", hari: 30 },
  { nama: "Desember", hari: 31 }
];

if (bulan < 1 || bulan > 12) {
  console.log("Nomor bulan tidak valid");
  process.exit(1);
}

let { nama, hari } = bulanData[bulan - 1];
console.log(`Bulan ke-${bulan} (${nama}) memiliki ${hari} hari`);