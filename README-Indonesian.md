# Issue Collab

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

> Sebuah alat yang di desain untuk membantu kamu menemukan projek sumber terbuka

## Demo & Penggunaan

- Gunakan tombon on/off untuk melakukan penyaringan. kamu juga bisa menggunakan kata kunci.
- Klik judul untuk membuka *issue* di GitHub pada tab baru

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## Latar Belakang

Ide dari proyek ini datang dari bagaimana mencari proyek yang keren di GitHub tapi tidak dipersulit dengan pencarian pada GitHub.

Saya memulai untuk mencari *issue* selama [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307)
(Sebuah acara tahunan yang di sponsori oleh Digital Ocean yang menarik pengembang untuk terlibat dalam sumber kode terbuka. Dengan membuat 4 *PRs* dalam sebulan dan mendapatkan BEBAS Kaos 👕).

## Pengembangan Lokal

Menjalankan proyek ini untuk pengembangan lokal, jika kamu sudah menginstall Node.js dan NPM, ikuti langkah - langkah ini di terminal. aplikasi kemudian akan berjalan pada *port* 3000.

```bash
npm install
npm start
```

Jika kamu tidak ingin menginstall Node.js dan kamu telah memiliki *Docker* terinstall, cukup gunakan `Dockerfile` dan skrip yang ada akan menyiapkan aplikasi terpisah pada *container*. aplikasi akan berjalan pada *port* 3000.

```bash
./dev.sh
```

## Berkontribusi

Terima kasih untuk perhatianmu! Kami menerima semua tipe kontribusi. **HACK AWAY!** 🔨🔨🔨

- Fork dan clone repository ini.
- Buat branch-mu dari `master` branch.
- Jalankan `npm run lint:fix` untuk melakukan cek format.
- Mohon untuk membuka PR dengan `Master` sebagai branch dasar.