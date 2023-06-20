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

```shell title="Command Prompt"
pnpm db:migrate
```

Ini adalah contoh proses logging dari Migrasi Basis Data yang berhasil

```shell title="Command Prompt"
> backend@1.0.0 db:migrate D:\project\sarpras\backend
> node ./databases/scripts/migrate.js

Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'unitkerjas' AND TABLE_SCHEMA = 'management_app'
Connection has been established successfully.
Executing (default): CREATE TABLE IF NOT EXISTS `unitkerjas` (`id` INTEGER auto_increment , `name` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `unitkerjas`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'items' AND TABLE_SCHEMA = 'management_app'
Executing (default): CREATE TABLE IF NOT EXISTS `items` (`id` INTEGER auto_increment , `name` VARCHAR(255) NOT NULL, `code` VARCHAR(255) NOT NULL, `klasifikasi` VARCHAR(255) NOT NULL, `jenis` VARCHAR(255) NOT NULL, `tipe` VARCHAR(255) NOT NULL, `lokasi` VARCHAR(255) NOT NULL, `ukuran` VARCHAR(255), `no_registrasi` VARCHAR(255), `bahan` VARCHAR(255), `no_pabrik` VARCHAR(255), `no_rangka` VARCHAR(255), `no_mesin` VARCHAR(255), `no_polisi` VARCHAR(255), `bpkb` VARCHAR(255), `sumber_dana` VARCHAR(255) NOT NULL, `harga` VARCHAR(255) NOT NULL, `keterangan` VARCHAR(255), `tahun_pembelian` VARCHAR(255) NOT NULL, `kondisi` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `unitkerjaId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`unitkerjaId`) REFERENCES `unitkerjas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `items`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'item_transfereds' AND TABLE_SCHEMA = 'management_app'
Executing (default): CREATE TABLE IF NOT EXISTS `item_transfereds` (`id` INTEGER auto_increment , `from` VARCHAR(255) NOT NULL, `to` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `itemId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`itemId`) REFERENCES `items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `item_transfereds`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'item_deleteds' AND TABLE_SCHEMA = 'management_app'
Executing (default): CREATE TABLE IF NOT EXISTS `item_deleteds` (`id` INTEGER auto_increment , `name` VARCHAR(255) NOT NULL, `code` VARCHAR(255) NOT NULL, `klasifikasi` VARCHAR(255) NOT NULL, `jenis` VARCHAR(255) NOT NULL, `tipe` VARCHAR(255) NOT NULL, `lokasi` VARCHAR(255) NOT NULL, `ukuran` VARCHAR(255), `no_registrasi` VARCHAR(255), `bahan` VARCHAR(255), `no_pabrik` VARCHAR(255), `no_rangka` VARCHAR(255), `no_mesin` VARCHAR(255), `no_polisi` VARCHAR(255), `bpkb` VARCHAR(255), `sumber_dana` VARCHAR(255) NOT NULL, `harga` VARCHAR(255) NOT NULL, `keterangan` VARCHAR(255), `tahun_pembelian` VARCHAR(255) NOT NULL, `kondisi` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `item_deleteds`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'klasifikasis' AND TABLE_SCHEMA = 'management_app'
Executing (default): CREATE TABLE IF NOT EXISTS `klasifikasis` (`id` INTEGER auto_increment , `name` VARCHAR(255) NOT NULL, `code` INTEGER NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `klasifikasis`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'jenis' AND TABLE_SCHEMA = 'management_app'
Executing (default): CREATE TABLE IF NOT EXISTS `jenis` (`name` VARCHAR(255) NOT NULL , `code` INTEGER NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `klasifikasi_code` INTEGER, `klasifikasiId` INTEGER, PRIMARY KEY (`name`), FOREIGN KEY (`klasifikasi_code`) REFERENCES `klasifikasis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`klasifikasiId`) REFERENCES `klasifikasis` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `jenis`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'tipes' AND TABLE_SCHEMA = 'management_app'
Executing (default): CREATE TABLE IF NOT EXISTS `tipes` (`id` INTEGER auto_increment , `name` VARCHAR(255) NOT NULL, `code` INTEGER NOT NULL, `jenis_name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `jeniName` VARCHAR(255), PRIMARY KEY (`id`), FOREIGN KEY (`jenis_name`) REFERENCES `jenis` (`name`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`jeniName`) REFERENCES `jenis` (`name`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `tipes`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'lokasis' AND TABLE_SCHEMA = 'management_app'
Executing (default): CREATE TABLE IF NOT EXISTS `lokasis` (`id` INTEGER auto_increment , `name` VARCHAR(255) NOT NULL, `code` INTEGER NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `lokasis`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'users' AND TABLE_SCHEMA = 'management_app'
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER auto_increment , `username` VARCHAR(255) NOT NULL, `password` VARCHAR(255) NOT NULL, `role` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'tokens' AND TABLE_SCHEMA = 'management_app'
Executing (default): CREATE TABLE IF NOT EXISTS `tokens` (`id` INTEGER auto_increment , `token` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `userId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `tokens`
all migration done!
```

### Pembenihan Basis Data

Pembenihan basis data adalah proses mengisi basis data dengan data awal atau contoh yang digunakan untuk pengujian atau pengembangan, sehingga dapat memberikan situasi yang realistis dalam lingkungan pengembangan sebelum data aktual digunakan.

- Jalankan Pembenihan Basis Data dengan Perintah

**Note:** Pastikan Command Line berada di folder `./sarpras/backed`

```shell title="Command Prompt"
pnpm db:seed
```

Ini adalah contoh proses logging dari Pembenihan Basis Data yang berhasil

```shell title="Command Prompt"
> backend@1.0.0 db:seed D:\project\sarpras\backend
> sequelize-cli db:seed:all


Sequelize CLI [Node: 18.13.0, CLI: 6.6.0, ORM: 6.31.1]

Loaded configuration file "databases\config.js".
Using environment "development".
== 20230525085356-klasifikasi: migrating =======
== 20230525085356-klasifikasi: migrated (0.009s)

== 20230525085913-jenis: migrating =======
== 20230525085913-jenis: migrated (0.007s)

== 20230525091502-tipe: migrating =======
== 20230525091502-tipe: migrated (0.014s)

== 20230527070657-lokasi: migrating =======
== 20230527070657-lokasi: migrated (0.006s)

== 20230531083311-unitkerja: migrating =======
== 20230531083311-unitkerja: migrated (0.005s)

== 20230608050222-superadmin: migrating =======
Executing (default): SELECT 1+1 AS result
Executing (default): INSERT INTO `users` (`id`,`username`,`password`,`role`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?);
Connection has been established successfully.
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'unitkerjas' AND TABLE_SCHEMA = 'management_app'
Executing (default): SHOW INDEX FROM `unitkerjas`
Executing (default): INSERT INTO `tokens` (`id`,`token`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?);
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'items' AND TABLE_SCHEMA = 'management_app'
Executing (default): SHOW INDEX FROM `items`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'item_transfereds' AND TABLE_SCHEMA = 'management_app'
Executing (default): SELECT `id`, `token`, `createdAt`, `updatedAt`, `userId` FROM `tokens` AS `token` WHERE `token`.`userId` = 1 LIMIT 1;
Executing (default): SHOW INDEX FROM `item_transfereds`
Executing (default): UPDATE `tokens` SET `userId`=?,`updatedAt`=? WHERE `id` = ?
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'item_deleteds' AND TABLE_SCHEMA = 'management_app'
Executing (default): SHOW INDEX FROM `item_deleteds`
== 20230608050222-superadmin: migrated (0.388s)
```

Setelah proses Migrasi dan Pembenihan Basis Data selesai, Anda dapat melanjutkan proses Pemasangan Aplikasi.
