let warna = "kuning";
let pesan = {
    "merah": "Lampu merah: Berhenti",
    "kuning": "Lampu kuning: Hati-hati, bersiap berhenti",
    "hijau": "Lampu hijau: Jalan"
};

switch (warna) {
    case "merah":
    case "kuning":
    case "hijau":
        console.log(pesan[warna]);
        break;
    default:
        console.log("Lampu rusak");
}

let (warna = "kuning", pesan) 
