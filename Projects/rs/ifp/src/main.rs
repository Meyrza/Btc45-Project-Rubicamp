fn main() {
    // if1()
    // if2()
    // if3()
    // if4()
    // if5()
    // if6()
    // if8()
    // if9()
    if10()
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

// fn if6() {
//     let total_belanja = 350000;
//     let mut diskon = 0;

//     if total_belanja >= 500000 {
//         diskon = 20;
//     } else if total_belanja >= 200000 {
//         diskon = 10;
//     } else if total_belanja >= 100000 {
//         diskon = 5;
//     }

//     let total_bayar = total_belanja - (total_belanja * diskon / 100);

//     println!("Total belanja: Rp {}", total_belanja);
//     println!("Diskon: {}%", diskon);
//     println!("Total bayar: Rp {}", total_bayar);
// }

// fn if7() {
//     let skor: i32 = 82;
//     let grade: &str;
    
//     // If-else if-else statement
//     if skor >= 90 {
//         grade = "A";
//     } else if skor >= 80 {
//         grade = "B";
//     } else if skor >= 70 {
//         grade = "C";
//     } else if skor >= 60 {
//         grade = "D";
//     } else {
//         grade = "E";
//     }
    
//     println!("Skor: {}", skor);
//     println!("Grade: {}", grade);
// }

// fn if8() {
//     let berat: f64 = 70.0; // kg
//     let tinggi: f64 = 1.75; // meter

//     let bmi: f64 = berat / (tinggi * tinggi);
//     let kategori: &str;

//     if bmi < 18.5 {
//         kategori = "Underweight";
//     } else if bmi < 25.0 {
//         kategori = "Normal";
//     } else if bmi < 30.0 {
//         kategori = "Overweight";
//     } else {
//         kategori = "Obese";
//     }

//     println!("BMI: {:.2}", bmi);
//     println!("Kategori: {}", kategori);
// }

// fn if9() {
//     let jenisKendaraan: &str = "sepeda";
//     let durasi = 3; // jam
//     let tarifPerjam: i32; // initialize
//     let mut diizinkan: bool = true;

//     if jenisKendaraan == "motor" {
//         tarifPerjam = 2000;
//     } else if jenisKendaraan == "mobil" {
//         tarifPerjam = 5000;
//     } else if jenisKendaraan == "truk" {
//         tarifPerjam = 10000;
//     } else {
//         diizinkan = false;
//         tarifPerjam = 0;
//     }

//     if diizinkan {
//         let totalBayar = tarifPerjam * durasi;

//         println!("Jenis kendaraan: {}", jenisKendaraan);
//         println!("Durasi parkir: {} jam", durasi);
//         println!("Tarif per jam: Rp {}", tarifPerjam);
//         println!("Total bayar: Rp {}", totalBayar);
//     } else {
//         println!("Kendaraan tidak diizinkan");
//     }
// }

fn if10() {
    let angka1: f64 = 10.0;
    let angka2: f64 = 3.0;
    let operator = "/";

    if operator == "+" {
        println!("{} + {} = {}", angka1, angka2, angka1 + angka2);
    } else if operator == "-" {
        println!("{} - {} = {}", angka1, angka2, angka1 - angka2);
    } else if operator == "*" {
        println!("{} * {} = {}", angka1, angka2, angka1 * angka2);
    } else if operator == "/" {
        if angka2 != 0.0 {
            println!("{} / {} = {}", angka1, angka2, angka1 / angka2);
        } else {
            println!("pembagian tidak boleh nol");
        }
    } else {
        println!("operator tidak tersedia");
    }
}

