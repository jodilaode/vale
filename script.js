const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");
const gif = document.getElementById("gif");
const photo = document.getElementById("photo");

yesBtn.onclick = () => {
    result.innerHTML = "YAY!!! 🎉💖";
    gif.style.display = "block";
    photo.style.display = "block";

    // Hilangin tombol
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
};

noBtn.onmouseover = () => {
    const x = Math.random() * 70;
    const y = Math.random() * 70;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "%";
    noBtn.style.top = y + "%";
};
