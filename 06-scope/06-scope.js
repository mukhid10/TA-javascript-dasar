/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
// - global scope dan local scope
// - global scope = variabel dapat digunakan di mana saja dalam program.
// - local scope = variabel yang cakupannya hanya dalam blok (variabel hanya dapat diakses di blok code {})

//contoh variabel gobal scope
let nama = "Mukhammad Abdul Mukhid";
function perkenalan(){
    console.log(nama)
}
perkenalan();

//contoh variabel local scope
function boothcamp(){
    let namaBoothcamp = "skilvul";
    console.log(namaBoothcamp)
}
boothcamp();
// console.log(namaBoothcamp) //jika namaBoothcamp diakse dari luar {} seperti ini maka akan error karna local scope

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - yang tampil Mariah
/// - karna yang di panggil consol.log function bukan variabel
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));