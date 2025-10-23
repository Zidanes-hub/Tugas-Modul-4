## Identitas Praktikan

- Nama: Zidane Surya Nugraha
- Nim: 607022400036
- Kelas: D3TK-48-01  
- Mata Kuliah: Pemrograman Web  

## Fitur Utama

### 1. **Halaman Beranda (index.html)**
- 🎨 Hero section dengan gradient modern
- 📱 Responsive design untuk semua device
- 📝 Form kontak dengan validasi
- 🎯 Animasi smooth scroll
- 💫 Card features interaktif

### 2. **Sistem Login (login.html)**
- 🔐 Autentikasi pengguna
- ✅ Validasi form
- 💾 Session management dengan localStorage
- 🎨 UI modern dengan gradient background
- ℹ️ Info kredensial demo di halaman

### 3. **Dashboard (dashboard.html)**
- 👤 Personalized welcome message
- 📊 Statistics cards (Total Proyek, Tugas Selesai, dll)
- 📋 Aktivitas terbaru
- ⚡ Quick actions buttons
- 🚪 Logout functionality
- 🔒 Protected route (hanya bisa diakses setelah login)

## Cara Menggunakan 

### Metode 1: Buka Langsung di Browser
```bash
# Buka CMD ketik 'git clone [url_repository]
# Cukup buka file index.html di browser Anda
# Double click pada index.html atau:
firefox index.html
# atau
chrome index.html
```

### Metode 2: Menggunakan HTTP Server
```bash
# Menggunakan Python 3
cd tugas-modul-4
python3 -m http.server 8080

# Buka browser dan akses:
# http://localhost:8080
```

### Metode 3: Menggunakan Node.js (http-server)
```bash
# Install http-server (jika belum)
npm install -g http-server

# Jalankan server
cd tugas-modul-4
http-server -p 8080

# Buka browser dan akses:
# http://localhost:8080
```

## Kredensial Login

Untuk testing, gunakan kredensial berikut:

**Akun Admin:**
- Username: `admin`
- Password: `admin123`

**Akun User:**
- Username: `user`
- Password: `user123`

## Struktur Proyek

```
tugas-modul-4/
│
├── index.html          # Halaman utama/beranda
├── login.html          # Halaman login
├── dashboard.html      # Halaman dashboard (protected)
│
├── css/
│   └── style.css       # Styling lengkap dengan animasi
│
├── js/
│   └── script.js       # JavaScript untuk semua fungsi
│
└── README.md           # Dokumentasi (file ini)
```

## Teknologi yang Digunakan

- **HTML5** - Struktur semantic modern
- **CSS3** - Styling dengan:
  - CSS Variables untuk theming
  - Flexbox & Grid Layout
  - Animations & Transitions
  - Responsive Media Queries
  - Gradient backgrounds
- **Vanilla JavaScript** - Fitur interaktif:
  - LocalStorage API untuk session
  - Form validation
  - Event handling
  - DOM manipulation
  - Smooth scrolling
  - IntersectionObserver API

## Fitur Keamanan

1. **Session Management** - Menggunakan localStorage untuk tracking login
2. **Protected Routes** - Dashboard hanya bisa diakses setelah login
3. **Form Validation** - Validasi input di frontend
4. **Auto Redirect** - Redirect otomatis jika belum login

## Responsive Design

Website ini fully responsive dan bisa diakses dengan baik di:
- 💻 Desktop (1920px+)
- 💻 Laptop (1024px - 1920px)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (320px - 768px)

## Testing

### Test Login
1. Buka `login.html`
2. Masukkan kredensial (admin/admin123)
3. Klik tombol \"Masuk\"
4. Akan redirect ke dashboard

### Test Dashboard Protection
1. Coba akses `dashboard.html` tanpa login
2. Akan redirect ke `login.html`

### Test Logout
1. Di dashboard, klik tombol \"Logout\"
2. Akan kembali ke beranda

### Test Contact Form
1. Di beranda, scroll ke section \"Hubungi Kami\"
2. Isi form dengan data
3. Klik \"Kirim Pesan\"
4. Akan muncul konfirmasi

