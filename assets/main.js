document.addEventListener("DOMContentLoaded", function () {
    const emoji = document.getElementById('emoji');

    emoji.addEventListener('click', () => {
        emoji.classList.add('shake');

        setTimeout(() => { 
            emoji.classList.remove('shake');
        }, 5000);
        });
});

// function berterbangan
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.innerText = '💮';

    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = (Math.random() * 2 + 3) + 's';//3-5S

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 6000);//hilangkan setelah animasi selesai
}

setInterval(createFlower, 300);// spawn bunga setiap 0.3 detik

const emoji = document.getElementById("emoji");
const popup = document.getElementById("popupBox");

emoji.addEventListener("click", () => {
    popup.style.display = "block";
});

function closePopup() {
    popup.style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bgMusic");

    // beberapa browser butuh interaksi user dulu 
    document.body.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(err => console.log("Autoplay blocked:", err));
        }
    }, { once : true});
});