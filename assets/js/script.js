let currentIndex = 0; // Variabel untuk menyimpan indeks saat ini

function changeMessage() {
    const messages = [
        "Untuk B. Zalzabila Chaterina Hachikita di hari ulang tahun nya",
        "Semoga umur kamu yang ke 21th ini bisa menjadi pribadi yang lebih baik:)",
        "Semoga panjang umur Sayang :)",
        "Semoga apa yang sayang inginkan di kabulkan..",
        "Semoga selali di beri kesehatan",
        "Rezekinya Lancar",
        "Ibadahnya di tingkatkan lagi sayang jangan malas..",
        "Kurang-kurangin ngamuk2nya, tantrumnya hehehe",
        "Semangat di Jogja Tanpa aku",
        "Semangat magangnya sayangku",
        "Maaf ya sayang kalau di ulang tahunmu kita nggak bisa ketemu..",
        "Maaf ya kalau aku sering bikin kamu nangis, sakit hati, asal kamu tau aku sayang kamu..",
        "Makasih banyak belakangan ini selalu ada buat aku sayang",
        "Kamu udh ngisi kekosongan aku",
        "Maaf ya sayang aku egois",
        "Untuk Kue-nya Di tunggu ya sayang Hari ini",
        "Untuk kadonya ketemu kita unboxing bareng2",
        "Mungkin Itu aja sayang yang bisa aku ucapin",
        "INTINYA...",
        "SELAMAT ULANG TAHUN SAYANG YANG KE-21TH",
        "I LOVE YOUUUU MORE AND MORE AND MOREEEEE",
        "SELESAI"
        

    ];
    
    // Tampilkan pesan berdasarkan currentIndex
    document.getElementById('personal-message').textContent = messages[currentIndex];
    
    // Perbarui indeks untuk pesan berikutnya
    currentIndex = (currentIndex + 1) % messages.length;
}
