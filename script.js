    // function createHeart() {
    //         const heart = document.createElement('watermark-container');
    //         heart.classList.add('heart');
    //         heart.innerHTML = 'Happ ';
    //         document.body.appendChild(heart);

    //         const duration = Math.random() * 8 + 5;

    //         if (Math.random() < 0.5) {
    //             // من أسفل لفوق
    //             const x = Math.random() * window.innerWidth;
    //             const y = window.innerHeight;
    //             heart.style.position = "absolute";
    //             heart.style.left = x + "px";
    //             heart.style.top = y + "px";
    //             heart.style.animation = "floatUp " + duration + "s linear forwards";
    //         } else {
    //             // من يمين لليسار
    //             const y = Math.random() * window.innerHeight;
    //             const x = window.innerWidth;
    //             heart.style.position = "absolute";
    //             heart.style.left = x + "px";
    //             heart.style.top = y + "px";
    //             heart.style.animation = "floatLeft " + duration + "s linear forwards";
    //         }

    //         setTimeout(function () {
    //             heart.remove();
    //         }, duration * 1000);
    //     }

    //     setInterval(createHeart, 1000);



    const sentences = [
  "I LOV OU",
  "Happy Birth Day",
  "You’r beautiful",
  "You’r eyes so pretty"
];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('word');

  // اختيار جملة عشوائية
  heart.innerHTML = sentences[Math.floor(Math.random() * sentences.length)];
  document.body.appendChild(heart);

  const duration = Math.random() * 8 + 5;
  if (Math.random() < 0.5) {
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.position = "absolute";
    heart.style.animation = "floatUp " + duration + "s linear forwards";
  } else {
    heart.style.left = window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.position = "absolute";
    heart.style.animation = "floatLeft " + duration + "s linear forwards";
  }

  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 1000);