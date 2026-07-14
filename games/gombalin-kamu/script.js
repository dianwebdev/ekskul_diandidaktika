/* ========================================
   CONFIGURATION
======================================== */

const TOTAL_ROUNDS = 5;


/* ========================================
   QUESTIONS
======================================== */

const questions = [

    {
        question: "Kamu capek nggak?",

        yesAnswer:
            "Pantesan... dari tadi muter-muter terus di pikiranku 😌💕",

        noAnswer:
            "Bagus deh, soalnya perjalanan kita masih panjang. Aku sama kamu maksudnya 😎💕"
    },

    {
        question: "Kamu punya Google Maps?",

        yesAnswer:
            "Boleh pinjam? Soalnya aku tersesat di senyummu 😍",

        noAnswer:
            "Nggak masalah. Aku sudah menemukan tujuan hidupku... kamu 😌💕"
    },

    {
        question:
            "Kamu percaya cinta pada pandangan pertama?",

        yesAnswer:
            "Syukurlah. Berarti aku nggak perlu lewat depan kamu dua kali 😎💕",

        noAnswer:
            "Kalau begitu tunggu ya, aku lewat depan kamu sekali lagi 😂💕"
    },

    {
        question:
            "Kamu tahu bedanya kamu sama bintang?",

        yesAnswer:
            "Bintang cuma menerangi malam. Kamu menerangi hariku 😌✨",

        noAnswer:
            "Kalau bintang ada di langit, kalau kamu ada di hatiku 💕"
    },

    {
        question:
            "Kamu suka matematika?",

        yesAnswer:
            "Bantu aku menghitung berapa kali aku memikirkanmu. Kayaknya nggak terhingga 😍",

        noAnswer:
            "Sama. Aku juga nggak suka menghitung hari tanpa kamu 😂💕"
    },

    {
        question:
            "Kamu punya WiFi di rumah?",

        yesAnswer:
            "Pantesan aku merasa terkoneksi terus sama kamu 📶💕",

        noAnswer:
            "Tanpa WiFi pun hati kita masih bisa terkoneksi 😌💕"
    },

    {
        question:
            "Kamu suka hujan?",

        yesAnswer:
            "Aku lebih suka hujan perhatian dari kamu ☔💕",

        noAnswer:
            "Kalau hujan turun, kita bisa berteduh berdua 😌💕"
    },

    {
        question:
            "Kamu takut gelap?",

        yesAnswer:
            "Tenang. Ada aku yang nemenin takut bareng 😂💕",

        noAnswer:
            "Pantesan. Senyum kamu sudah cukup menerangi semuanya ✨"
    },

    {
        question:
            "Kamu suka kopi?",

        yesAnswer:
            "Aku lebih sering kecanduan senyum kamu ☕💕",

        noAnswer:
            "Kamu nggak perlu kopi untuk bikin aku deg-degan 😌"
    },

    {
        question:
            "Kamu pernah kehilangan sesuatu?",

        yesAnswer:
            "Kalau kehilangan hati, coba cek di aku. Kayaknya nyangkut di sini 😎💕",

        noAnswer:
            "Hati-hati. Jangan sampai kehilangan aku 😂💕"
    },

    {
        question:
            "Kamu suka jalan-jalan?",

        yesAnswer:
            "Kapan-kapan jalan yuk. Siapa tahu jalannya sampai masa depan 😎💕",

        noAnswer:
            "Diam di sini aja. Biar aku yang mendekat 😌💕"
    },

    {
        question:
            "Kamu percaya takdir?",

        yesAnswer:
            "Aku juga. Apalagi setelah kamu muncul di game ini 😍",

        noAnswer:
            "Biar aku yang meyakinkan takdir supaya milih kamu 😂💕"
    },

    {
        question:
            "Kamu suka bunga?",

        yesAnswer:
            "Aku tahu bunga paling cantik. Yang lagi baca tulisan ini 🌸💕",

        noAnswer:
            "Pantesan. Kamu sendiri sudah lebih cantik dari bunga 😌"
    },

    {
        question:
            "Kamu gampang senyum nggak?",

        yesAnswer:
            "Berarti tugasku membuatmu senyum jadi lebih mudah 😍",

        noAnswer:
            "Aku bakal terus gombal sampai kamu senyum 😂💕"
    },

    {
        question:
            "Kamu sedang sibuk?",

        yesAnswer:
            "Maaf mengganggu. Aku cuma numpang lewat di pikiranmu 😌💕",

        noAnswer:
            "Bagus. Berarti ada waktu untuk memikirkan aku 😂"
    },

    {
        question:
            "Boleh aku jujur?",

        yesAnswer:
            "Dari semua jawaban di game ini, yang paling aku suka tetap kamu 💕",

        noAnswer:
            "Ya sudah aku bohong. Katanya kamu biasa saja... padahal luar biasa 😎💕"
    }

];


/* ========================================
   ELEMENTS
======================================== */

const romanticMusic =
    document.getElementById("romanticMusic");

const musicButton =
    document.getElementById("musicButton");

const screens =
    document.querySelectorAll(".game-screen");

const startScreen =
    document.getElementById("startScreen");

const questionScreen =
    document.getElementById("questionScreen");

const responseScreen =
    document.getElementById("responseScreen");

const endScreen =
    document.getElementById("endScreen");

const playerNameInput =
    document.getElementById("playerName");

const playerNameDisplay =
    document.getElementById("playerNameDisplay");

const startButton =
    document.getElementById("startButton");

const questionText =
    document.getElementById("questionText");

const typingCursor =
    document.getElementById("typingCursor");

const roundText =
    document.getElementById("roundText");

const progressBar =
    document.getElementById("progressBar");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const responseText =
    document.getElementById("responseText");

const responseEmoji =
    document.getElementById("responseEmoji");

const nextButton =
    document.getElementById("nextButton");

const nextButtonText =
    document.getElementById("nextButtonText");

const endPlayerName =
    document.getElementById("endPlayerName");

const endEmoji =
    document.getElementById("endEmoji");

const endTitle =
    document.getElementById("endTitle");

const endMessage =
    document.getElementById("endMessage");

const yesScore =
    document.getElementById("yesScore");

const noScore =
    document.getElementById("noScore");

const restartButton =
    document.getElementById("restartButton");

const gameToast =
    document.getElementById("gameToast");

const toastEmoji =
    document.getElementById("toastEmoji");

const toastText =
    document.getElementById("toastText");

const heartBackground =
    document.getElementById("heartBackground");


/* ========================================
   STATE
======================================== */

let playerName = "Kamu";

let currentRound = 0;

let yesCount = 0;

let noCount = 0;

let selectedQuestions = [];

let currentQuestion = null;

let isTyping = false;

let noButtonCanRun = false;

let noButtonRunCount = 0;

let isMusicMuted = false;

let audioContext;


/* ========================================
   SCREEN
======================================== */

function showScreen(screen) {

    screens.forEach(item => {

        item.classList.remove("active");

    });


    screen.classList.add("active");

}


/* ========================================
   RANDOM QUESTIONS
======================================== */

function getRandomQuestions() {

    const shuffled = [...questions];


    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            shuffled[i],
            shuffled[randomIndex]
        ]
        =
        [
            shuffled[randomIndex],
            shuffled[i]
        ];

    }


    return shuffled.slice(
        0,
        TOTAL_ROUNDS
    );

}


/* ========================================
   START
======================================== */

startButton.addEventListener(
    "click",
    startGame
);


playerNameInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            startGame();

        }

    }
);


function startGame() {

    const inputName =
        playerNameInput.value.trim();


    playerName =
        inputName || "Kamu";


    currentRound = 0;

    yesCount = 0;

    noCount = 0;


    selectedQuestions =
        getRandomQuestions();


    playerNameDisplay.textContent =
        playerName;


    endPlayerName.textContent =
        playerName;


    playRomanticMusic();

    playStartSound();


    createHeartBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        15
    );


    showQuestion();

}


/* ========================================
   ROMANTIC MUSIC
======================================== */

function playRomanticMusic() {

    if (isMusicMuted) {

        return;

    }


    romanticMusic.pause();

    romanticMusic.currentTime = 0;

    romanticMusic.volume = 0;


    romanticMusic
        .play()

        .then(() => {

            fadeInMusic();

        })

        .catch(error => {

            console.log(
                "Musik gagal diputar:",
                error
            );

        });

}


function fadeInMusic() {

    let volume = 0;


    const fadeInterval =
        setInterval(() => {

            if (isMusicMuted) {

                clearInterval(
                    fadeInterval
                );

                return;

            }


            volume += .02;


            if (volume >= .25) {

                volume = .25;

                clearInterval(
                    fadeInterval
                );

            }


            romanticMusic.volume =
                volume;

        }, 100);

}


/* ========================================
   MUSIC BUTTON
======================================== */

musicButton.addEventListener(
    "click",
    function() {

        isMusicMuted =
            !isMusicMuted;


        if (isMusicMuted) {

            romanticMusic.pause();

            musicButton.textContent =
                "🔇";

        }
        else {

            romanticMusic
                .play()
                .catch(() => {});


            romanticMusic.volume =
                .25;


            musicButton.textContent =
                "🔊";

        }

    }
);


/* ========================================
   QUESTION
======================================== */

function showQuestion() {

    currentQuestion =
        selectedQuestions[currentRound];


    noButtonRunCount = 0;


    noButtonCanRun =
        Math.random() < .35;


    resetNoButton();


    roundText.textContent =
        `${currentRound + 1} / ${TOTAL_ROUNDS}`;


    progressBar.style.width =
        `${((currentRound + 1) / TOTAL_ROUNDS) * 100}%`;


    questionText.textContent = "";


    showScreen(questionScreen);


    setTimeout(() => {

        typeText(
            currentQuestion.question,
            questionText
        );

    }, 300);

}


/* ========================================
   TYPE TEXT
======================================== */

function typeText(text, element) {

    let index = 0;


    isTyping = true;


    typingCursor.style.display =
        "inline-block";


    element.textContent = "";


    const typingInterval =
        setInterval(() => {

            element.textContent +=
                text.charAt(index);


            index++;


            playTypingSound();


            if (index >= text.length) {

                clearInterval(
                    typingInterval
                );


                isTyping = false;


                setTimeout(() => {

                    typingCursor.style.display =
                        "none";

                }, 400);

            }

        }, 45);

}


/* ========================================
   YES
======================================== */

yesButton.addEventListener(
    "click",
    event => {

        if (isTyping) {

            return;

        }


        yesCount++;


        playYesSound();


        createHeartBurst(
            event.clientX,
            event.clientY,
            20
        );


        showResponse(
            currentQuestion.yesAnswer,
            "😍"
        );

    }
);


/* ========================================
   NO
======================================== */

noButton.addEventListener(
    "click",
    event => {

        if (isTyping) {

            return;

        }


        noCount++;


        playNoSound();


        createHeartBurst(
            event.clientX,
            event.clientY,
            12
        );


        showResponse(
            currentQuestion.noAnswer,
            "😌"
        );

    }
);


/* ========================================
   RUN NO BUTTON
======================================== */

noButton.addEventListener(
    "mouseenter",
    runNoButton
);


noButton.addEventListener(
    "touchstart",
    event => {

        if (noButtonCanRun) {

            event.preventDefault();

            runNoButton();

        }

    },
    {
        passive: false
    }
);


function runNoButton() {

    if (!noButtonCanRun) {

        return;

    }


    if (noButtonRunCount >= 3) {

        noButtonCanRun = false;


        resetNoButton();


        showToast(
            "😌",
            "Oke deh, sekarang boleh klik..."
        );


        return;

    }


    noButtonRunCount++;


    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        20;


    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        20;


    noButton.classList.add(
        "running"
    );


    noButton.style.left =
        `${Math.max(20, Math.random() * maxX)}px`;


    noButton.style.top =
        `${Math.max(20, Math.random() * maxY)}px`;


    playRunSound();


    showToast(
        "😂",
        "Nggak semudah itu!"
    );

}


/* ========================================
   RESET NO BUTTON
======================================== */

function resetNoButton() {

    noButton.classList.remove(
        "running"
    );


    noButton.style.left = "";

    noButton.style.top = "";

}


/* ========================================
   RESPONSE
======================================== */

function showResponse(text, emoji) {

    resetNoButton();


    responseText.textContent =
        text;


    responseEmoji.textContent =
        emoji;


    nextButtonText.textContent =

        currentRound === TOTAL_ROUNDS - 1

            ? "Lihat Hasil"

            : "Gombalin Lagi";


    showScreen(responseScreen);


    createHeartBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        25
    );

}


/* ========================================
   NEXT
======================================== */

nextButton.addEventListener(
    "click",
    function() {

        playClickSound();


        currentRound++;


        if (
            currentRound >=
            TOTAL_ROUNDS
        ) {

            showEndScreen();

            return;

        }


        showQuestion();

    }
);


/* ========================================
   END
======================================== */

function showEndScreen() {

    yesScore.textContent =
        yesCount;


    noScore.textContent =
        noCount;


    if (yesCount >= 4) {

        endEmoji.textContent =
            "😍";


        endTitle.textContent =
            "Berhasil Digombalin!";


        endMessage.textContent =
            "Sepertinya pertahanan hatimu sudah mulai goyah. Senyum-senyum sendiri ya? 💕";

    }
    else if (yesCount >= 2) {

        endEmoji.textContent =
            "😌";


        endTitle.textContent =
            "Mulai Salting Nih!";


        endMessage.textContent =
            "Katanya biasa saja, tapi kok masih bertahan sampai pertanyaan terakhir? 😂💕";

    }
    else {

        endEmoji.textContent =
            "😎";


        endTitle.textContent =
            "Pertahanan Kuat!";


        endMessage.textContent =
            "Banyak menjawab Tidak, tapi tetap membaca semua gombalannya sampai selesai 😂💕";

    }


    showScreen(endScreen);


    playEndSound();


    createHeartBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        50
    );

}


/* ========================================
   RESTART
======================================== */

restartButton.addEventListener(
    "click",
    function() {

        playClickSound();


        playerNameInput.value = "";


        resetNoButton();


        showScreen(startScreen);

    }
);


/* ========================================
   TOAST
======================================== */

let toastTimeout;


function showToast(
    emoji,
    message
) {

    clearTimeout(
        toastTimeout
    );


    toastEmoji.textContent =
        emoji;


    toastText.textContent =
        message;


    gameToast.classList.add(
        "show"
    );


    toastTimeout =
        setTimeout(() => {

            gameToast.classList.remove(
                "show"
            );

        }, 1500);

}


/* ========================================
   FLOATING HEART
======================================== */

function createFloatingHeart() {

    const hearts = [

        "💕",
        "💖",
        "💗",
        "✨",
        "💓"

    ];


    const heart =
        document.createElement("span");


    heart.classList.add(
        "floating-heart"
    );


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        `${Math.random() * 100}%`;


    heart.style.fontSize =
        `${15 + Math.random() * 25}px`;


    heart.style.animationDuration =
        `${6 + Math.random() * 6}s`;


    heartBackground.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 12000);

}


setInterval(
    createFloatingHeart,
    700
);


/* ========================================
   HEART BURST
======================================== */

function createHeartBurst(
    x,
    y,
    total = 15
) {

    const hearts = [
        "💕",
        "💖",
        "💗",
        "✨"
    ];


    for (
        let i = 0;
        i < total;
        i++
    ) {

        const heart =
            document.createElement("span");


        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            `${x}px`;


        heart.style.top =
            `${y}px`;


        heart.style.zIndex =
            "500";


        heart.style.pointerEvents =
            "none";


        heartBackground.appendChild(
            heart
        );


        const randomX =
            (Math.random() - .5) * 500;


        const randomY =
            (Math.random() - .5) * 500;


        heart.animate(

            [

                {

                    transform:
                        "translate(-50%, -50%) scale(.5)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${randomX}px),
                            calc(-50% + ${randomY}px)
                        )
                        scale(1.5)
                        rotate(360deg)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    1200,

                easing:
                    "ease-out"

            }

        );


        setTimeout(() => {

            heart.remove();

        }, 1500);

    }

}


/* ========================================
   AUDIO CONTEXT
======================================== */

function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    return audioContext;

}


/* ========================================
   PLAY TONE
======================================== */

function playTone(
    frequency,
    duration,
    type = "sine",
    volume = .05
) {

    const context =
        getAudioContext();


    const oscillator =
        context.createOscillator();


    const gain =
        context.createGain();


    oscillator.type =
        type;


    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        volume,
        context.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        .001,
        context.currentTime + duration
    );


    oscillator.connect(gain);

    gain.connect(context.destination);


    oscillator.start();


    oscillator.stop(
        context.currentTime + duration
    );

}


/* ========================================
   SOUNDS
======================================== */

function playStartSound() {

    playTone(400, .15);


    setTimeout(() => {

        playTone(600, .2);

    }, 100);


    setTimeout(() => {

        playTone(800, .3);

    }, 200);

}


function playTypingSound() {

    if (Math.random() > .55) {

        return;

    }


    playTone(
        700,
        .03,
        "sine",
        .015
    );

}


function playYesSound() {

    playTone(600, .15);


    setTimeout(() => {

        playTone(900, .3);

    }, 100);

}


function playNoSound() {

    playTone(300, .15);


    setTimeout(() => {

        playTone(500, .25);

    }, 100);

}


function playRunSound() {

    playTone(
        800,
        .08,
        "square",
        .03
    );

}


function playClickSound() {

    playTone(
        550,
        .1
    );

}


function playEndSound() {

    const tones = [

        500,
        650,
        800,
        1000

    ];


    tones.forEach(
        (tone, index) => {

            setTimeout(() => {

                playTone(
                    tone,
                    .4
                );

            }, index * 150);

        }
    );

}