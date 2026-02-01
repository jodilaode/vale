const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");
const gif = document.getElementById("gif");

yesBtn.onclick = () => {
    result.innerHTML = "YAY! 🎉💖";
    gif.style.display = "block";
};

noBtn.onmouseover = () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";
};
