// Ambil bahasa yang dipilih dari localStorage, default ke 'id'
let currentLanguage = localStorage.getItem('selectedLanguage') || 'id';

// Fungsi untuk mengatur bahasa dan simpan ke localStorage
function setLanguage(lang) {
  localStorage.setItem("selectedLanguage", lang);
  currentLanguage = lang;      // ⬅️ UPDATE variabel agar langsung dipakai
  translate();                 // ⬅️ Langsung terjemahkan tanpa perlu reload
}

// Fungsi untuk menerjemahkan semua elemen dengan atribut data-translate
function translate() {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      el.textContent = translations[currentLanguage][key];
    }
  });
}

// Data terjemahan
const translations = {
  id: {
    loadingPage: "Memuat halaman",
    navigation: "Navigasi",
    home: "Beranda",
    profile: "Profil",
    settings: "Pengaturan",
    settings2: "⚙️ Pengaturan",
    selectLanguage: "🌐 Pilih Bahasa:",
    lightDarkMode: "🌗 Mode Terang / Gelap",
    credits: "Kredit",
    tetapSemangat: "Tetap semangat belajar coding!",
    lihatNetlifyKu: "Lihat Netlify ku",
    projectGame: "Proyek Game",
    open: "Masuk",
    tentangSaya: "Tentang Saya",
    deskripsiProfil: "Halo! Saya seorang pengembang web pemula yang sedang belajar membuat antarmuka interaktif dan responsif. Proyek ini adalah langkah awal saya untuk menampilkan karya secara online.",
    website: "Website",
    skill: "Skill",
    skill1: "✔ HTML & CSS",
    skill2: "✔ JavaScript (dasar)",
    skill3: "✔ UI sederhana",
    skill4: "✔ Publikasi ke Netlify",
    developedByDaffaProject: "Dikembangkan oleh Daffa Project",
    creditsTitle: "Proyek Game",
    creditsDesc1: "Proyek ini dibuat dan dikembangkan oleh ",
    creditsDesc2: "sebagai bagian dari pembelajaran dan pengembangan keterampilan dalam bidang pengembangan web.",
    creditsThanks: "Terima kasih kepada pihak-pihak yang telah membantu...",
    mdn: "MDN Web Docs – Referensi HTML, CSS, dan JS.",
    netlify: "Netlify – Layanan hosting gratis.",
    flaticon: "Flaticon – Penyedia ikon bebas lisensi.",
    komunitas: "Komunitas Developer – Inspirasi dan referensi.",
    creditsDesc3: "Kode ditulis manual dengan semangat belajar.",
    versi: "Versi:",
    rilis: "Rilis:",
    restartPage: "Restart halaman:",
    clickForReload: "Klik untuk Reload",

    // Select Menu
    pilihGame: "Pilih Game",
    flipMatch: "Flip & Match",
    snakeGame: "Permainan Ular",
    mulai: "Mulai",
    
    // Game Ular
    score: "Skor:",
    highScore: "Skor Tinggi",
    sound: "🎵 Suara:",
    gamePaused: "⏸️ Permainana Dijeda",
    resume: "▶️ Lanjut",
    kembali: "🔙 Kembali",
    
    // Flip & Match
    flipMatchTitle: "Flip & Match",
    scoreText: "Skor:",
    highScoreText: "Skor Tertinggi:",
    timeLeft: "detik",
    winMessage: "Selamat! Anda berhasil menyelesaikan permainan!",
    loseMessage: "Waktu habis! Coba lagi.",
    menu: "☰ Menu",
    resumeGame: "▶️ Lanjut",
    restartGame: "🔄 Ulangi",
    exitGame: "❌ Keluar",
    gameLose: "Waktu Habis!",
    gameWin: "Kamu Menang!",
  },
  en: {
    loadingPage: "Loading page",
    navigation: "Navigation",
    home: "Home",
    profile: "Profile",
    settings: "Settings",
    settings2: "⚙️ Settings",
    selectLanguage: "🌐 Select Language:",
    lightDarkMode: "🌗 Light / Dark Mode",
    credits: "Credits",
    tetapSemangat: "Keep the spirit up in learning coding!",
    lihatNetlifyKu: "See my Netlify",
    projectGame: "Game Project",
    open: "Enter",
    tentangSaya: "About Me",
    deskripsiProfil: "Hello! I’m a beginner web developer learning to create interactive and responsive interfaces.",
    website: "Website",
    skill: "Skill",
    skill1: "✔ HTML & CSS",
    skill2: "✔ Basic JavaScript",
    skill3: "✔ Simple UI",
    skill4: "✔ Publish to Netlify",
    developedByDaffaProject: "Developed by Daffa Project",
    creditsTitle: "Game Project",
    creditsDesc1: "This project was created and developed by ",
    creditsDesc2: "as part of learning and improving web development skills.",
    creditsThanks: "Thanks to the resources and documentation that helped...",
    mdn: "MDN Web Docs – Reference for HTML, CSS, and JS.",
    netlify: "Netlify – Free hosting platform.",
    flaticon: "Flaticon – Free icons provider.",
    komunitas: "Developer Community – Inspiration and references.",
    creditsDesc3: "All code written manually with learning spirit.",
    versi: "Version:",
    rilis: "Released:",
    restartPage: "Restart page:",
    clickForReload: "Click for Reload",

    // Select Menu
    pilihGame: "Choose Game",
    flipMatch: "Flip & Match",
    snakeGame: "Snake Game",
    mulai: "Start",
    
    // Game Ular
    score: "Score:",
    highScore: "High Score",
    sound: "🎵 Sound:",
    gamePaused: "⏸️ Game Paused",
    resume: "▶️ Resume",
    kembali: "🔙 Return",
    
    // Flip & Match
    flipMatchTitle: "Flip & Match",
    scoreText: "Score:",
    highScoreText: "High Score:",
    timeLeft: "seconds",
    winMessage: "Congratulations! You completed the game!",
    loseMessage: "Time's up! Try again.",
    menu: "☰ Menu",
    resumeGame: "▶️ Resume",
    restartGame: "🔄 Restart",
    exitGame: "❌ Exit",
    gameLose: "Time's Up!",
    gameWin: "You Win!",
  }
};

// Jalankan terjemahan saat dokumen sudah siap
document.addEventListener("DOMContentLoaded", translate);