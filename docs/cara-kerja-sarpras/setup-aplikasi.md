---
sidebar_position: 1
---

# Setup Aplikasi

Pada bagian ini, Anda akan belajar bagaimana cara menyiapkan aplikasi **Sarpras** pada `local server` Anda.

## Persiapan

- Siapkan folder proyek Aplikasi Anda.
- Komputer harus memiliki **[Node JS v.16+](https://nodejs.org/en)**
- Komputer harus memiliki **[pnpm v.8+](https://pnpm.io/)** (opsional & **rekomendasi**)

  - Alternatif dari `pnpm` adalah package manager bawaan **Node JS** yaitu `npm`

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

## Migrasi Basis Data

Migrasi basis data adalah proses terkontrol untuk mengelola perubahan struktur dan skema basis data, memungkinkan pengembang untuk membuat, mengubah, atau menghapus tabel, kolom, dan indeks tanpa mengganggu data yang ada.

- Jalankan Migrasi Basis Data dengan Perintah

**Note:** Pastikan Command Line berada di folder `./sarpras/backend`

```shell
pnpm db:migrate
```

## Pembenihan Basis Data

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

## Memulai Server Lokal

Memulai server lokal adalah proses menjalankan server pada komputer lokal yang dapat digunakan untuk menguji dan mengembangkan aplikasi web atau layanan, sehingga dapat diakses melalui URL lokal seperti `http://localhost`.

- Jalankan Server Local dengan Perintah

**Note:** Pastikan Command Line berada di folder `./sarpras/frontend`

```shell
pnpm start
```

Front End dan Back End akan otomatis dijalankan dengan bantuan dari dependensi `Concurrently`.

## Aplikasi Siap Digunakan

Kunjungi alamat browser `http://localhost:3000` untuk melihat hasil dari setup Aplikasi Anda. Dan Aplikasi siap untuk digunakan.
