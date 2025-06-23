// this is javascript
document.addEventListener('DOMContentLoaded', function() {
  let score = 0; // Skor saat ini
  let highscore = 0; // Highscore awal (akan diambil dari localStorage)

  // Ambil elemen HTML
  const scoreDisplay = document.getElementById('namak'); // Untuk display skor saat ini
  const clickButton = document.getElementById('burhan'); // Tombol klik
  const highscoreDisplay = document.getElementById('highscoreDisplay'); // **BARU**: Untuk display highscore

  // --- 1. Ambil Highscore dari localStorage saat game dimuat ---
  // Cek apakah ada highscore yang tersimpan di localStorage
  const savedHighscore = localStorage.getItem('clickerHighscore'); // 'clickerHighscore' ini nama kuncinya

  if (savedHighscore !== null) { // Kalo ada (nggak null)
    highscore = parseInt(savedHighscore); // Ubah string jadi angka dan simpan ke variabel highscore
  }

  // --- Pastikan elemen ditemukan dan inisialisasi tampilan ---
  if (scoreDisplay && clickButton && highscoreDisplay) {
    scoreDisplay.textContent = score; // Tampilkan skor awal (0)
    highscoreDisplay.textContent = highscore; // Tampilkan highscore awal (dari localStorage atau 0)

    // Tambahkan event listener ke tombol 'burhan'
    clickButton.addEventListener('click', function() {
      score++; // Tambah skor
      scoreDisplay.textContent = score; // Update tampilan skor

      // --- 2. Cek dan Update Highscore ---
      if (score > highscore) { // Kalo skor saat ini lebih tinggi dari highscore
        highscore = score; // Update nilai highscore
        highscoreDisplay.textContent = highscore; // Update tampilan highscore di HTML
        localStorage.setItem('clickerHighscore', highscore); // **Simpan highscore baru ke localStorage**
      }
    });
  } else {
    console.error("Salah satu elemen HTML (namak, burhan, atau highscoreDisplay) tidak ditemukan! Cek ID Luwh.");
  }
});
