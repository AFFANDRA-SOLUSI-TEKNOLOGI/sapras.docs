---
sidebar_position: 2
---

# Konfigurasi Aplikasi

Pada bagian ini, Anda akan belajar mengenai bagaimana menyiapkan konfigurasi yang dibutuhkan Aplikasi Sarpras ini untuk bisa berjalan dan digunakan dengan baik.

## Instalasi Dependensi Backend dan Frontend

Instalasi dependensi adalah proses mengunduh dan mengatur komponen atau paket yang dibutuhkan oleh suatu perangkat lunak atau proyek, sehingga memungkinkan aplikasi tersebut berfungsi dengan benar.

### Instalasi Dependensi Front End

Instal Dependensi Front End dengan perintah berikut:

- Masuk folder Front End di proyek dengan perintah

```shell
cd ./sarpras/frontend
```

- Install dependensi dengan perintah

```shell
pnpm install
```

### Instalasi Dependensi Back End

Instal Dependensi Back End dengan perintah berikut:

- Masuk folder Back End di proyek dengan perintah

```shell
cd ./sarpras/backend
```

- Install dependensi dengan perintah

```shell
pnpm install
```

## Basis Data

Langkah ini dikhususkan untuk konfigurasi dengan relasi Basis Data yang digunakan **[`MySQL`](https://id.wikipedia.org/wiki/MySQL)**

**Penting!** Pastikan `MySQL Services` sudah berjalan dengan baik sebelum melakukan Migrasi dan Pembenihan

![MySQL Services](/img/xampp-mysql-services.png)

### Migrasi Basis Data

Migrasi basis data adalah proses terkontrol untuk mengelola perubahan struktur dan skema basis data, memungkinkan pengembang untuk membuat, mengubah, atau menghapus tabel, kolom, dan indeks tanpa mengganggu data yang ada.

- Jalankan Migrasi Basis Data dengan Perintah

**Note:** Pastikan Command Line berada di folder `./sarpras/backend`

```shell
pnpm db:migrate
```

### Pembenihan Basis Data

Pembenihan basis data adalah proses mengisi basis data dengan data awal atau contoh yang digunakan untuk pengujian atau pengembangan, sehingga dapat memberikan situasi yang realistis dalam lingkungan pengembangan sebelum data aktual digunakan.

- Jalankan Pembenihan Basis Data dengan Perintah

**Note:** Pastikan Command Line berada di folder `./sarpras/backed`

```shell
pnpm db:seed
```

## Membangun Proyek

Membangun Proyek adalah proses mengkompilasi dan menghasilkan output akhir dari kode sumber proyek, seperti file biner, aplikasi, atau bundle yang siap digunakan.

- Jalankan Pembangunan Proyek dengan Perintah

**Note:** Pastikan Command Line berada di folder `./sarpras/frontend`

```shell
pnpm build
```

Tunggu hingga proses `building` selesai dan lanjutkan ke langkah berikutnya.
