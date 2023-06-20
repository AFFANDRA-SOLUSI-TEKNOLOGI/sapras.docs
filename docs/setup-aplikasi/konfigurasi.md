---
sidebar_position: 2
---

# Konfigurasi Aplikasi

Pada bagian ini, Anda akan belajar mengenai bagaimana menyiapkan konfigurasi yang dibutuhkan Aplikasi Sarpras ini untuk bisa berjalan dan digunakan dengan baik.


## Konfigurasi Variabel Aplikasi

Konfigurasi variabel sangat penting agar aplikasi ini dapat berjalan dengan sempurna. Biasana bisa dikonfigurasi dalam file `.env`.

### Front End

Untuk meng-konfigurasi variabel untuk bagian frontend, anda dapat mengikuti langkah-langkah berikut:

- Masuk ke folder Front End di proyek

```shell
cd ./sarpras/frontend
```

- Salin file `.env.example` menjadi file `.env`

```shell
cp .env.example .env
```

:::info

Jika anda menggunakan Windows, anda dapat menggunakan command `copy` dibanding `cp`.

:::

- Sekarang buka file `.env` untuk mulai mengubah konfigurasi aplikasi.

    ```shell
    NEXTAUTH_SECRET=
    JWT_SIGNING_PRIVATE_KEY=
    NEXT_PUBLIC_API_HOST=http://localhost:3001
    ```

    - `NEXTAUTH_SECRET` digunakan untuk meng-enkripsi token JWT untuk autentikasi. Anda dapat mengisi teks apapun disini.
    - `JWT_SIGNING_PRIVATE_KEY` kunci yang digunakan untuk verifikasi. Anda juga dapat mengisi apapun disini.
    - `NEXT_PUBLIC_API_HOST` diisi dengan **URL Back End** anda. ***Akhiran tidak boleh memiliki slash (/)***.

### Back End

Untuk meng-konfigurasi variabel bagian backend, anda dapat mengikuti langkah dibawah:

- Masuk ke folder Back End

```shell
cd ./sarpras/backend
```

- Salin file `.env.example` menjadi file `.env`

```shell
cp .env.example .env
```

:::info

Jika anda menggunakan Windows, anda dapat menggunakan command `copy` dibading `cp`.

:::

- Sekarang buka file `.env`

    ```shell
    PORT=

    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=
    DB_USERNAME=root
    DB_PASSWORD=
    ```

    - `PORT` port untuk backend anda. Port biasanya diisi dengan nomor antara 0 sampai 65536.
    - `DB_HOST` alamat host database anda.
    - `DB_PORT` port dari database anda.
    - `DB_DATABASE` nama database yang digunakan untuk aplikasi ini.
    - `DB_USERNAME` kredensial username yang digunakan untuk autentikasi database.
    - `DB_PASSWORD` kredensial password yang digunakan untuk autentikasi database.

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

Setelah proses Migrasi dan Pembenihan Basis Data selesai, Anda dapat melanjutkan proses Pemasangan Aplikasi.
