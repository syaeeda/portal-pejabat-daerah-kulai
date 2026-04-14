# Portal Rasmi Pejabat Daerah Kulai

Sistem Portal AI Chatbot untuk Pejabat Daerah Kulai yang menyediakan layanan pelanggan otomatis, manajemen aduan, dan analytics.

## 🎯 Fitur Utama

- **💬 AI Chatbot** - Chatbot yang didukung AI (Gemini API) untuk menjawab pertanyaan umum
- **📝 Manajemen Aduan** - Pengguna dapat mengajukan, melacak, dan mengelola aduan
- **❓ FAQ & Pengetahuan** - Basis pengetahuan yang dapat dicari untuk informasi umum
- **🔐 Autentikasi Pengguna** - Sistem login dan registrasi yang aman
- **📊 Dashboard Admin** - Analytics dan reporting untuk administrator
- **📱 Responsif** - Kompatibel dengan desktop, tablet, dan mobile

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client

### Backend (Diimplementasikan Nanti)
- **Laravel** - PHP framework
- **MySQL** - Database
- **Gemini API** - AI integration

## 📋 Prerequisites

- Node.js (v14 atau lebih tinggi)
- npm atau yarn
- Git

## 🚀 Setup & Installation

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/Portal-Rasmi-Pejabat-Kulai.git
cd Portal-Rasmi-Pejabat-Kulai
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment File
```bash
cp .env.example .env.local
```

Edit `.env.local` dan sesuaikan dengan konfigurasi backend Anda:
```
REACT_APP_API_URL=http://localhost:8000/api
```

### 4. Start Development Server
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## 📁 Struktur Folder

```
Portal-Rasmi-Pejabat-Kulai/
├── public/
├── src/
│   ├── components/
│   │   ├── Chatbot/
│   │   ├── Complaints/
│   │   ├── FAQ/
│   │   ├── Dashboard/
│   │   └── Common/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── ChatbotPage.js
│   │   ├── ComplaintsPage.js
│   │   ├── FAQPage.js
│   │   ├── DashboardPage.js
│   │   ├── Login.js
│   │   └── Register.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

## 📝 Penggunaan

### Untuk Pengguna Umum
1. **Daftar & Login** - Buat akun baru dengan email
2. **Gunakan Chatbot** - Tanya pertanyaan kepada AI chatbot
3. **Ajukan Aduan** - Laporkan masalah melalui form
4. **Lacak Status** - Pantau progress aduan Anda
5. **Baca FAQ** - Cari jawaban di knowledge base

### Untuk Administrator
1. **Login** - Masuk dengan akun admin
2. **Dashboard** - Lihat statistik dan analytics
3. **Manajemen Aduan** - Kelola dan balas aduan
4. **Manajemen FAQ** - Tambah/edit/hapus FAQ entries
5. **Generate Reports** - Export data untuk analisis

## 🔗 API Endpoints

Lihat `src/services/api.js` untuk daftar lengkap endpoint API.

### Auth
- `POST /api/auth/register` - Registrasi pengguna baru
- `POST /api/auth/login` - Login pengguna
- `POST /api/auth/logout` - Logout
- `GET /api/auth/profile` - Dapatkan profil pengguna

### Chatbot
- `POST /api/chatbot/message` - Kirim pesan ke chatbot
- `GET /api/chatbot/history` - Dapatkan riwayat chat

### Complaints
- `GET /api/complaints/my-complaints` - Dapatkan aduan pengguna
- `POST /api/complaints` - Buat aduan baru
- `GET /api/complaints/:id` - Dapatkan detail aduan
- `GET /api/complaints` - Dapatkan semua aduan (admin)
- `PUT /api/complaints/:id/status` - Update status aduan (admin)

### FAQ
- `GET /api/faqs` - Dapatkan semua FAQ
- `GET /api/faqs/search` - Cari FAQ
- `POST /api/faqs` - Buat FAQ baru (admin)
- `PUT /api/faqs/:id` - Update FAQ (admin)
- `DELETE /api/faqs/:id` - Hapus FAQ (admin)

### Analytics
- `GET /api/analytics/chat` - Chat analytics (admin)
- `GET /api/analytics/complaints` - Complaint analytics (admin)
- `POST /api/analytics/generate-report` - Generate report (admin)

## 🧪 Development

### Menjalankan Development Server
```bash
npm start
```

### Build untuk Production
```bash
npm run build
```

### Lint Code
```bash
npm run lint
```

## 📤 Deployment

### Deploy ke GitHub Pages
```bash
npm install --save-dev gh-pages
```

Edit `package.json` dan tambahkan:
```json
"homepage": "https://yourusername.github.io/Portal-Rasmi-Pejabat-Kulai",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Kemudian jalankan:
```bash
npm run deploy
```

### Deploy ke Vercel
```bash
npm i -g vercel
vercel
```

### Deploy ke Netlify
Hubungkan GitHub repository Anda ke Netlify dan setup otomatis deployment.

## 🐛 Bug Report

Jika Anda menemukan bug, silakan buat issue di GitHub dengan detail:
- Deskripsi bug
- Langkah untuk reproduce
- Expected behavior
- Actual behavior
- Screenshot (jika applicable)

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file `LICENSE` untuk detail.

## 👥 Tim Pengembang

- **Pat Yoon Xin** (A24CS0292) - AI Chatbot
- **Syaeeda Khanum Binti Rosli** (A24CS0299) - Complaint Management
- **Irdina Sofia Binti Rohaidi** (A24CS0253) - Analytics & Reporting
- **Atiqah Qaisara Binti Hijat** (A24CS0228) - User Authentication
- **Raja Nur Allea Dewi Mahsuri** (A24CS0294) - FAQ & Knowledge Base

## 📧 Kontak

Untuk pertanyaan atau masukan, hubungi:
- Email: support@pejabatkulai.gov.my
- Telepon: +60-7-1234-5678

## 🎓 Institusi

SCSE2243: APPLICATION DEVELOPMENT PROJECT 1
Semester 02, 2025/2026
Faculty of Computing, UTM Johor Bahru

---

**Dibuat dengan ❤️ oleh Tim Beyond Level**
