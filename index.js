require("dotenv").config();
const express = require("express");
const { Sequelize } = require("sequelize");
const router = require("./src/routes");

const app = express();
const port = 5000;
const cors = require("cors");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.use(cors());
app.use(express.json());
app.use(router);


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
