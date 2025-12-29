// بيانات الأغاني
const songs = [
    { title: " الليل وسماه 💖", src: "song1.mp3.mp3" },
    { title: " قبلتك انت لقيتك  🎵", src: "song2.mp3.mp3" },
    { title: "نفسي اقولك  🌟", src: "song3.mp3.mp3" }
];

let songIndex = 0;
let errorCount = 0;
const audio = document.getElementById('mainAudio');
const playBtn = document.getElementById('playBtn');

function loadSong(index) {
    audio.src = songs[index].src;
    document.getElementById('song-title').innerText = songs[index].title;
}
loadSong(songIndex);

function togglePlay() {
    if (audio.paused) { audio.play(); playBtn.innerText = "⏸"; }
    else { audio.pause(); playBtn.innerText = "▶️"; }
}

function nextSong() { songIndex = (songIndex + 1) % songs.length; loadSong(songIndex); audio.play(); }
function prevSong() { songIndex = (songIndex - 1 + songs.length) % songs.length; loadSong(songIndex); audio.play(); }

// منطق مراحل الترحيب
function nextStage(current, next) {
    document.getElementById('stage' + current).classList.add('hidden');
    document.getElementById('stage' + next).classList.remove('hidden');
}

function showLogin() {
    document.getElementById('pre-entry').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}

// فحص الباسورد مع الرسائل الكوميدية
function checkPassword() {
    const input = document.getElementById('passwordInput').value.trim();
    const errorBox = document.getElementById('errorMessage');
    const loginBox = document.getElementById('login-box');

    if (input === "10/10") {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        audio.play(); playBtn.innerText = "⏸";
        startTypewriter();
        startCountdown();
        createHearts();
    } else {
        errorCount++;
        loginBox.style.animation = "shake 0.4s";
        setTimeout(() => loginBox.style.animation = "", 400);
        if (errorCount === 1) errorBox.innerText = "ركز يا حمودتي.. التاريخ غلط! 🧐";
        else if (errorCount === 2) errorBox.innerText = "ما إنت لو مهتم كنت عرفت! 🙄";
        else if (errorCount === 3) errorBox.innerText = "دي تالت مرة! يلاهوي 😂";
        else errorBox.innerText = "اكتب 10/10 يا حمودتيى هموتك! ❤️";
    }
}

// فك التشفير
function decryptHeart() {
    document.getElementById('heart-path').classList.add('draw-animation');
    setTimeout(() => {
        document.getElementById('initials').classList.add('reveal-text');
    }, 2000);
}

// كوبونات الحب
function generateCoupon() {
    const coupons = [ "مسامحة فورية لو زعلنا 🤝"];
    const random = coupons[Math.floor(Math.random() * coupons.length)];
    document.getElementById('coupon-display').innerText = random;
}

function startTypewriter() {
    const text = "الي حبيب قلبي حمودتي بحبكك جدااا و بجد لو الحب بيت، فأنت البيت اللي هافضل مستنياه عشان اسكن فيه🏡 وبتمني اشوفك دايماا محقق كل احلامك وتكون بخير علطول ودايماا فخوره بيك يارب تكون سنه تحقيق كل اللي نفسك فيه وبحب دايما اشوفك مبسوط وبخير ويارب دايما تفضل حبيبي وعقبال يارب مانكون مع بعض بقي وتبطل تقولي هكسر دماغك مش هتعرف اياك تلمسني بس عندي كلام كتيررر بس مش بعرف اعبر بحبككك جدااا ياحمودتي🌏♥️♥️♥️♥️♥️! ❤️";
    let i = 0;
    const dest = document.getElementById("typewriter-text");
    function type() {
        if (i < text.length) {
            dest.innerHTML += text.charAt(i);
            i++; setTimeout(type, 50);
        }
    }
    type();
}

function startCountdown() {
    const target = new Date("January 1, 2026 00:00:00").getTime();
    setInterval(() => {
        const diff = target - new Date().getTime();
        document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    }, 1000);
}

function createHearts() {
    const container = document.getElementById('hearts-container');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.position = "absolute";
        heart.style.animation = "fly 4s linear infinite";
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 300);
}


particlesJS("particles-js", { "particles": { "number": { "value": 100 }, "color": { "value": "#ffffff" }, "size": { "value": 1.5 }, "move": { "enable": true, "speed": 1 } } });
