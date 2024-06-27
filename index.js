require("dotenv").config();

const { Sequelize } = require("sequelize");

// Konfigurasi Sequelize
const sequelize = new Sequelize(
  `postgres://${process.env.DEV_USERNAME}:${process.env.DEV_PASSWORD}@${process.env.DEV_HOST}:5432/${process.env.DEV_DATABASE}`
);

// Coba koneksi
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Koneksi ke database berhasil!");
  } catch (error) {
    console.error("Gagal terkoneksi ke database:", error);
  }
}

// Panggil fungsi testConnection untuk mencoba koneksi
testConnection();
