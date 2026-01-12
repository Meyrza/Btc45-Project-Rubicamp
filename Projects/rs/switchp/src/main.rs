fn main() {
    //switch1()
    //switch2()
    //switch3()
    switch4()
}
// fn switch1() {
//     let nomor_hari = 3;

//     match nomor_hari {
//         1 => println!("Hari ke-{}: Senin", nomor_hari),
//         2 => println!("Hari ke-{}: Selasa", nomor_hari),
//         3 => println!("Hari ke-{}: Rabu", nomor_hari),
//         4 => println!("Hari ke-{}: Kamis", nomor_hari),
//         5 => println!("Hari ke-{}: Jumat", nomor_hari),
//         6 => println!("Hari ke-{}: Sabtu", nomor_hari),
//         7 => println!("Hari ke-{}: Minggu", nomor_hari),
//         _ => println!("Nomor hari tidak valid! Masukkan angka 1-7"),
//     }
// }

// fn switch2() {
//     let pilihan = 2;
//     match pilihan {

// fn switch1() {
//     let nomor_hari = 3;
//
//     match nomor_hari {
//         1 => println!("Hari ke-{}: Senin", nomor_hari),
//         2 => println!("Hari ke-{}: Selasa", nomor_hari),
//         3 => println!("Hari ke-{}: Rabu", nomor_hari),
//         4 => println!("Hari ke-{}: Kamis", nomor_hari),
//         5 => println!("Hari ke-{}: Jumat", nomor_hari),
//         6 => println!("Hari ke-{}: Sabtu", nomor_hari),
//         7 => println!("Hari ke-{}: Minggu", nomor_hari),
//         _ => println!("Nomor hari tidak valid! Masukkan angka 1-7"),
//     }
// }

// fn switch2() {
//     let pilihan = 2;
//     match pilihan {
//         1 => {
//             println!("Anda memilih: Nasi Goreng");
//             println!("Harga: Rp 15000");
//         }
//         2 => {
//             println!("Anda memilih: Mie Ayam");
//             println!("Harga: Rp 12000");
//         }
//         3 => {
//             println!("Anda memilih: Bakso");
//             println!("Harga: Rp 10000");
//         }
//         4 => {
//             println!("Anda memilih: Es Teh");
//             println!("Harga: Rp 5000");
//         }
//         _ => println!("Menu tidak tersedia"),
//     }
// }

// fn switch3() {
//     let grade = "B";
//     match grade {
//         "A" => println!("Grade {}: Sangat Baik", grade),
//         "B" => println!("Grade {}: Baik", grade),
//         "C" => println!("Grade {}: Cukup", grade),
//         "D" => println!("Grade {}: Kurang", grade),
//         "E" => println!("Grade {}: Sangat Kurang", grade),
//         _ => println!("Grade {}: Grade tidak valid", grade),
//     }
// }

fn switch4() {
    let bulan = 2;
    let (nama_bulan, hari_dalam_bulan) = match bulan {
        1 => ("Januari", 31),
        2 => ("Februari", 28),
        3 | 5 | 7 | 8 | 10 | 12 => {
            let nama = match bulan {
                3 => "Maret",
                5 => "Mei",
                7 => "Juli",
                8 => "Agustus",
                10 => "Oktober",
                12 => "Desember",
                _ => unreachable!(),
            };
            (nama, 31)
        }
        4 | 6 | 9 | 11 => {
            let nama = match bulan {
                4 => "April",
                6 => "Juni",
                9 => "September",
                11 => "November",
                _ => unreachable!(),
            };
            (nama, 30)
        }
        _ => {
            println!("Nomor bulan tidak valid (1-12)");
            return;
        }
    };

    println!(
        "Bulan ke-{} ({}) memiliki {} hari",
        bulan, nama_bulan, hari_dalam_bulan
    );
}
