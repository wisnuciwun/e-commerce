# 🎉 E-Commerce

Aplikasi e-commerce dengan tampilan minimalist.

## ➕ Fitur
> 1. Search Bar
- Dapat mencari barang berdasarkan kata kunci dari barang yang sudah tertampil
- Jika tidak menemukan barang, akan muncul tombol untuk kembali ke pencarian awal
- Eksekusi pencarian dapat menggunakan tombol enter atau klik tombol di sebelah kanan
- Jika kolom search kosong, kemudian di-enter atau klik maka akan kembali ke pencarian awal
- floating header sehingga dapat mencari barang meskipun sedang scrolling

> 2. Category Button
- Dapat mencari barang berdasarkan kelompok barang dari yang sudah tertampil
- Jika tidak menemukan barang akan muncul tombol kembali ke pencarian awal
- Warna tombol berubah sesuai klik user

> 3. Flexbox View Products
- Tampilan produk dengan ukuran image sama dan object-fit cover
- Pencarian baru akan bertambah kearah bawah secara otomatis dengan efek fade-in
- Posisi deskripsi item akan rata dengan yang lain meskipun nama produk lain lebih panjang
- Nama produk akan muncul ... apabila melebihi 26 karakter
- Nama toko akan muncul ... apabila melebihi 8 karakter
- Icon minimalis dari bootstrap

> 4. Floating Back Button
- tombol kembali ke menu awal akan muncul ketika user scrolling dan akan sembunyi ketika ada di tampilan banner
- tombol dapat digunakan untuk kembali ke atas secara otomatis apabila infinite scroll sudah terlalu jauh

> 5. Responsive View
- Tampilan akan menyesuaikan di Smartphone sehingga tidak berantakan
- Component fit to center sebaik mungkin

> 6. Banner Carousel
- Tampilan banner sliding otomatis dan dapat dipindah dengan tombol

## 👷 Spesifikasi Teknis
- React JS 17.0.2
- MDBootsrap react ui kit
- Bootstrap icons
- Typescript 4.5.2
- Redux 7.2.6
- Axios
- React Number Format 4.8.0
- Penerapan React Memo, Lifecycle (componentdidmount & componentdidupdate) dan PureComponent untuk menghindari render yang tidak perlu serta optimalisasi performa
- Font custom (Hanken Round)

## 💩 Known bugs
1. Floating button baru sembunyi dan baru muncul kembali di akhir pada halaman selanjutnya (tidak muncul terus). Serta muncul pada saat pencarian kosong
2. Search belum dinamis karena keterbatasan api
3. Indikator carousel tidak sesuai jumlah image
4. React Lazy hanya bisa diterapkan di load awal web, karena ada bug saat implementasi infinite scroll. Sehingga tampilan loading per api belum maksimal
