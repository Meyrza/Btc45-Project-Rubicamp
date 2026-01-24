let waktu = 10;
let tombolDitekan = false;

while (waktu > 0 && !tombolDitekan) {
  console.log("Countdown: " + waktu);

  if (waktu === 7) {
    tombolDitekan = true;
  }

  waktu--;
}

if (tombolDitekan) {
  console.log("Timer dihentikan oleh user pada detik ke-" + waktu);
} else {
  console.log("Countdown selesai!");
}
