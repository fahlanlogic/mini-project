Langkah menjalankan aplikasi pada lingkungan development :
- jalankan `npm i`
- buat file .env sesuai .env.example
- sesuaikan dengan database local yang ingin digunakan
- (lewati langkah ini jika database sudah dibuat secara manual) jalankan `npx sequelize db:create` untuk membuat database sesuai environment development
- jalankan `npm run dev` untuk menjalankan aplikasi
- pastikan terminal menampilkan pesan `Koneksi ke database berhasil!` yang mana artinya berhasil terhubung ke database
- jalankan `npx sequelize db:migrate` untuk menjalankan seluruh migration