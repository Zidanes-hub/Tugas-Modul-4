// Menjalankan kode ini saat semua halaman web sudah selesai di-load
window.onload = function() {
    // 1. Pesan selamat datang 
    alert('Selamat Datang di Proyek Modul 4 Saya! 🚀');

    // 2. Kita siapin 'selector' buat validasi form nanti 
    // Kita 'pegang' elemen form-nya pake ID
    const formKontak = document.getElementById('formKontak');

    // Kita tambahin 'event listener' buat nangkep pas form-nya di-submit
    formKontak.addEventListener('submit', function(event) {
        // 'event.preventDefault()' ini penting biar halaman nggak ke-refresh
        event.preventDefault();

        // Ambil nilai dari input
        const namaInput = document.getElementById('nama').value;
        const emailInput = document.getElementById('email').value;

        // Logika validasi sederhana
        if (namaInput === '' || emailInput === '') {
            alert('Nama dan Email tidak boleh kosong! 🐞');
        } else {
            alert('Form berhasil dikirim (simulasi)! Data: ' + namaInput);
            // Nanti di modul PHP, data ini bakal kita kirim ke server
        }
    });

    // 3. Untuk animasi hover menu 
    // Kita bisa pake CSS (kayak di atas) atau JS. 
    // Kalo pake JS, kita bisa lakuin hal yg lebih kompleks.
    // Contoh simpel pake JS:
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            // Pas di-hover, tambahin gaya (contoh aja)
            this.style.backgroundColor = '#555';
        });

        link.addEventListener('mouseout', function() {
            // Pas hover-nya pergi, balikin lagi
            this.style.backgroundColor = 'transparent';
        });
    });
};