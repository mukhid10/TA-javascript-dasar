/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// TypeErrormewakili kesalahan ketika operasi tidak dapat dilakukan, biasanya (tetapi tidak secara eksklusif) ketika nilai bukan tipe yang diharapkan.

// ReferenceErrormewakili kesalahan ketika variabel yang tidak ada (atau belum diinisialisasi) dalam lingkup saat ini direferensikan.

// RangeErrormenunjukkan kesalahan ketika nilai tidak dalam set atau rentang nilai yang diizinkan.

// Syntax error disebabkan oleh kesalahan penggunaan sintaks yang telah ditentukan sebelumnya . Kesalahan sintaks terdeteksi saat mengkompilasi atau mengurai kode sumber.


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

// - terjadi error 
// - jenis error Syntax error 
// - terjadi karena kesalahan penggunaan syntax, kesalahan pengunna menampilkan dulu baru mendeklarasikan variabel, yang seharusnya mendeklarasikan variabel dulu baru menampilkan