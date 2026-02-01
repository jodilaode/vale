const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");
const gif = document.getElementById("gif");
const photo = document.getElementById("photo");
const music = document.getElementById("bg-music");
const ending = document.getElementById("ending");
const muteBtn = document.getElementById("mute");

let muted = false;

yesBtn.onclick = () => {
    result.innerHTML = "YAY!!! 🎉💖";
    gif.style.display = "block";
    photo.style.display = "block";
    ending.style.display = "block";
    muteBtn.style.display = "inline-block";

    // Fade-in piano 🎹
    music.volume = 0;
    music.play();

    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.4) {
            vol += 0.02;
            music.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 200);

    // Confetti 💖
    for (let i = 0; i < 60; i++) {
        createConfetti();
    }

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
};

muteBtn.onclick = () => {
    muted = !muted;
    music.muted = muted;
    muteBtn.innerHTML = muted ? "🔇" : "🔊";
};

noBtn.onmouseover = () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
};

function createConfetti() {
    const c = document.createElement("div");
    c.classList.add("confetti");
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = ["#ff4081", "#f06292", "#f8bbd0"][Math.floor(Math.random() * 3)];
    c.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
}
