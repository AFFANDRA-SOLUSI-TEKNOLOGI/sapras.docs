---
sidebar_position: 3
---

# Pemasangan Aplikasi

Pada bagian ini, Anda akan belajar bagaimana cara memasang dan menjalankan Aplikasi di Server Lokal Anda.

## Membangun Proyek

Membangun Proyek adalah proses mengkompilasi dan menghasilkan output akhir dari kode sumber proyek, seperti file biner, aplikasi, atau bundle yang siap digunakan.

- Jalankan Pembangunan Proyek dengan Perintah

**Note:** Pastikan Command Line berada di folder `./sarpras/frontend`

```shell title="Command Prompt"
pnpm build
```

Tunggu hingga proses `building` selesai dan lanjutkan ke langkah berikutnya.

Ini adalah contoh logging dari proses `building` yang berhasil.

```shell title="Command Prompt"
> frontend@0.1.0 build D:\project\sarpras\frontend
> next build

- info Loaded env from D:\project\sarpras\frontend\.env
- info Linting and checking validity of types

🌼 daisyUI 3.0.1 https://daisyui.com
╰╮
 ╰─ ✔︎ [ 1 ] theme is enabled. You can add more themes or make your own theme:
      https://daisyui.com/docs/themes

    ❤︎ Support daisyUI: https://opencollective.com/daisyui

- info Creating an optimized production build
- info Compiled successfully
- info Collecting page data
- info Generating static pages (15/15)
- info Finalizing page optimization

Route (pages)                                         Size     First Load JS
┌ ○ /                                                 2.16 kB         103 kB
├   /_app                                             0 B            87.2 kB
├ ○ /404                                              182 B          87.3 kB
├ λ /api/auth/[...nextauth]                           0 B            87.2 kB
├ ○ /dashboard                                        70.9 kB         191 kB
├ ○ /dashboard/history                                8.11 kB         140 kB
├ ○ /dashboard/inventory/[slug]                       16.1 kB         252 kB
├ ○ /dashboard/inventory/[slug]/[name]                4.5 kB          120 kB
├ ○ /dashboard/inventory/[slug]/[name]/edit           11.2 kB         124 kB
├ ○ /dashboard/inventory/[slug]/[name]/transfer/[id]  2.04 kB         110 kB
├ ○ /dashboard/inventory/[slug]/create                4.5 kB          111 kB
├ ○ /dashboard/layout                                 3.79 kB         107 kB
├ ○ /dashboard/users                                  4.22 kB         234 kB
├ ○ /dashboard/users/[id]/edit                        2.1 kB          109 kB
├ ○ /dashboard/users/create                           4.84 kB         108 kB
└ ○ /login                                            4.41 kB         106 kB
+ First Load JS shared by all                         100 kB
  ├ chunks/framework-ac88a2a245aea9ab.js              45.2 kB
  ├ chunks/main-98b7e5a2c35315d2.js                   27.6 kB
  ├ chunks/pages/_app-0cfe29126d7fcfce.js             13.3 kB
  ├ chunks/webpack-6ef43a8d4a395f49.js                999 B
  └ css/3a47742671cff395.css                          12.9 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
```

## Memulai Server Lokal

Memulai server lokal adalah proses menjalankan server pada komputer lokal yang dapat digunakan untuk menguji dan mengembangkan aplikasi web atau layanan, sehingga dapat diakses melalui URL lokal seperti `http://localhost`.

- Jalankan Server Local dengan Perintah

**Note:** Pastikan Command Line berada di folder `./sarpras/frontend`

```shell title="Command Prompt"
pnpm start
```

Ini adalah contoh proses logging memulai Server Lokal yang berhasil.

```shell title="Command Prompt"
> frontend@0.1.0 start D:\project\sarpras\frontend
> concurrently "cd ../backend && pnpm start" "next start"

[1] - ready started server on 0.0.0.0:3000, url: http://localhost:3000
[0]
[0] > backend@1.0.0 start D:\project\sarpras\backend
[0] > node index.js
[0]
[1] - info Loaded env from D:\project\sarpras\frontend\.env
[0] backend listen on port 3001
[0] Executing (default): SELECT 1+1 AS result
[0] Connection has been established successfully.
[0] Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'unitkerjas' AND TABLE_SCHEMA = 'management_app'
[0] Executing (default): SHOW INDEX FROM `unitkerjas`
[0] Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'items' AND TABLE_SCHEMA = 'management_app'
[0] Executing (default): SHOW INDEX FROM `items`
[0] Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'item_transfereds' AND TABLE_SCHEMA = 'management_app'
[0] Executing (default): SHOW INDEX FROM `item_transfereds`
[0] Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'item_deleteds' AND TABLE_SCHEMA = 'management_app'
[0] Executing (default): SHOW INDEX FROM `item_deleteds`
[0] Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'klasifikasis' AND TABLE_SCHEMA = 'management_app'
[0] Executing (default): SHOW INDEX FROM `klasifikasis`
[0] Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'jenis' AND TABLE_SCHEMA = 'management_app'
[0] Executing (default): SHOW INDEX FROM `jenis`
[0] Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'tipes' AND TABLE_SCHEMA = 'management_app'
[0] Executing (default): SHOW INDEX FROM `tipes`
[0] Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'lokasis' AND TABLE_SCHEMA = 'management_app'
[0] Executing (default): SHOW INDEX FROM `lokasis`
[0] Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'users' AND TABLE_SCHEMA = 'management_app'
[0] Executing (default): SHOW INDEX FROM `users`
[0] Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'tokens' AND TABLE_SCHEMA = 'management_app'
[0] Executing (default): SHOW INDEX FROM `tokens`
[0] all migration done!
```

Front End dan Back End akan otomatis dijalankan dengan bantuan dari dependensi [`concurrently`](https://www.npmjs.com/package/concurrently).

## Aplikasi Siap Digunakan

Kunjungi alamat browser **[`http://localhost:3000`](http://localhost:3000/)** untuk melihat hasil dari setup Aplikasi Anda. Dan Aplikasi siap untuk digunakan.

*Preview Landing Page Aplikasi*

![landing page sarpras](/img/landing-page.png)