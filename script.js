/* =====================================
   BIRTHDAY COUNTDOWN
===================================== */

// Change this date to your brother's birthday

const birthday = new Date(
    "August 21, 2026 00:00:00"
).getTime();


const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = birthday - now;


    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById("days").innerHTML = "🎂";
        document.getElementById("hours").innerHTML = "🎉";
        document.getElementById("minutes").innerHTML = "🥳";
        document.getElementById("seconds").innerHTML = "❤️";

        celebrate();

        return;
    }


    const days =
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .innerHTML = days;

    document.getElementById("hours")
        .innerHTML = hours;

    document.getElementById("minutes")
        .innerHTML = minutes;

    document.getElementById("seconds")
        .innerHTML = seconds;

}, 1000);



/* =====================================
   PHOTO SLIDESHOW
===================================== */

const photos = [

    "C:\Users\Lenovo\Downloads\pp1.jpeg"


];


const captions = [

    "Memory #1 ❤️",
    "The good old days 🥹",
    "Partners in crime 😂",
    "Best brother ever 💙",
    "One of my favorite memories 🫶🏻"

];


let currentPhoto = 0;


function showPhoto() {

    const image =
        document.getElementById("memoryPhoto");

    image.style.opacity = "0";


    setTimeout(function () {

        image.src = photos[currentPhoto];

        document.getElementById("photoCaption")
            .innerHTML = captions[currentPhoto];

        image.style.opacity = "1";

    }, 200);

}


function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto();

}


function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    showPhoto();

}



/* =====================================
   MUSIC
===================================== */

const music =
    document.getElementById("birthdayMusic");


let playing = false;


function toggleMusic() {

    if (playing) {

        music.pause();

        playing = false;

        document.querySelector(".music-btn")
            .innerHTML = "🎵 Play Music";

    }

    else {

        music.play();

        playing = true;

        document.querySelector(".music-btn")
            .innerHTML = "⏸️ Pause Music";

    }

}



/* =====================================
   SURPRISE POPUP
===================================== */

function showMessage() {

    document.getElementById("popup")
        .style.display = "flex";

    celebrate();

}


function closePopup() {

    document.getElementById("popup")
        .style.display = "none";

}



/* =====================================
   CONFETTI
===================================== */

const canvas =
    document.getElementById("confetti");

const ctx =
    canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let confettiPieces = [];


function createConfetti() {

    confettiPieces = [];


    for (let i = 0; i < 180; i++) {

        confettiPieces.push({

            x: Math.random() * canvas.width,

            y:
                Math.random() *
                canvas.height -
                canvas.height,

            size:
                Math.random() * 8 + 4,

            speed:
                Math.random() * 4 + 2,

            rotation:
                Math.random() * 360,

            rotationSpeed:
                Math.random() * 8 - 4

        });

    }

}


function drawConfetti() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    confettiPieces.forEach(function (piece) {

        piece.y += piece.speed;

        piece.rotation += piece.rotationSpeed;


        ctx.save();

        ctx.translate(
            piece.x,
            piece.y
        );

        ctx.rotate(
            piece.rotation *
            Math.PI / 180
        );


        ctx.fillStyle =
            `hsl(${Math.random() * 360}, 90%, 60%)`;


        ctx.fillRect(
            -piece.size / 2,
            -piece.size / 2,
            piece.size,
            piece.size
        );


        ctx.restore();


        if (piece.y > canvas.height) {

            piece.y = -20;

            piece.x =
                Math.random() *
                canvas.width;

        }

    });


    requestAnimationFrame(drawConfetti);

}


function celebrate() {

    createConfetti();

}


createConfetti();

drawConfetti();


/* Resize canvas */

window.addEventListener(
    "resize",
    function () {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }
);