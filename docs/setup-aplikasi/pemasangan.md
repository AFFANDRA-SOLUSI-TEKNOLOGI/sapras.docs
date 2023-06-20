---
sidebar_position: 3
---

# Pemasangan Aplikasi

Pada bagian ini, Anda akan belajar bagaimana cara memasang dan menjalankan Aplikasi di Server Lokal Anda.

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

Front End dan Back End akan otomatis dijalankan dengan bantuan dari dependensi [`concurrently`](https://www.npmjs.com/package/concurrently).

## Aplikasi Siap Digunakan

Kunjungi alamat browser **[`http://localhost:3000`](http://localhost:3000/)** untuk melihat hasil dari setup Aplikasi Anda. Dan Aplikasi siap untuk digunakan.
