fn main() {
    // if1()
    // if2()
    // if3()
    // if4()
    // if5()
    if6()
}
// fn if1() {
//     let angka = 15;

//     if angka > 0 {
//         println!("Angka positif ditemukan!");
//     }

//     println!("Program selesai");
// }
// fn if2() {
//     let umur = 20;

//     if umur >= 18 {
//         println!("Anda sudah dewasa");
//         println!("Anda sudah bisa memilih dalam pemilu");
//     }

//     println!("Terima kasih");
// }
// fn if3() {
//     let angka = 7;
//     if angka % 2 == 0 {
//         println!("{} adalah bilangan genap", angka);
//     } else {
//         println!("{} adalah bilangan ganjil", angka);
//     }
// }
// fn if4() {
//     let password = String::from("admin123");
//     if password == "admin123" {
//         println!("Login berhasil! Selamat datang.");
//     } else {
//         println!("Login gagal! Silakan coba lagi.");
//     }
// }
// fn if5() {
//     let suhu = 28;
//     if suhu >= 35 {
//         println!("Suhu {}°C: Sangat Panas", suhu);
//     } else if suhu >= 25 {  
//         println!("Suhu {}°C: Panas", suhu);
//     } else if suhu >= 15 {
//         println!("Suhu {}°C: Hangat", suhu);
//     }
// }

fn if6() {
    let total_belanja = 350000;
    let mut diskon = 0;

    if total_belanja >= 500000 {
        diskon = 20;
    } else if total_belanja >= 200000 {
        diskon = 10;
    } else if total_belanja >= 100000 {
        diskon = 5;
    }

    let total_bayar = total_belanja - (total_belanja * diskon / 100);

    println!("Total belanja: Rp {}", total_belanja);
    println!("Diskon: {}%", diskon);
    println!("Total bayar: Rp {}", total_bayar);
}

