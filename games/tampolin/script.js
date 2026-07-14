/* =====================================
   ELEMENTS
===================================== */

const startScreen =
    document.getElementById('startScreen');

const gameScreen =
    document.getElementById('gameScreen');

const resultScreen =
    document.getElementById('resultScreen');

const targetNameInput =
    document.getElementById('targetName');

const targetImageInput =
    document.getElementById('targetImage');

const uploadPlaceholder =
    document.getElementById('uploadPlaceholder');

const uploadPreview =
    document.getElementById('uploadPreview');

const previewImage =
    document.getElementById('previewImage');

const characterImage =
    document.getElementById('characterImage');

const startButton =
    document.getElementById('startButton');

const restartButton =
    document.getElementById('restartButton');

const character =
    document.getElementById('character');

const scoreElement =
    document.getElementById('score');

const timerElement =
    document.getElementById('timer');

const displayTargetName =
    document.getElementById('displayTargetName');

const characterName =
    document.getElementById('characterName');

const reactionText =
    document.getElementById('reactionText');

const hitEffect =
    document.getElementById('hitEffect');

const comboElement =
    document.getElementById('combo');

const finalScore =
    document.getElementById('finalScore');

const resultTarget =
    document.getElementById('resultTarget');

const resultMessage =
    document.getElementById('resultMessage');

const attackButtons =
    document.querySelectorAll('.attack-button');


/* =====================================
   AUDIO
===================================== */

const punchSound =
    document.getElementById('punchSound');

const aslapSound =
    document.getElementById('aslapSound');

const battleSound =
    document.getElementById('battleSound');


/* =====================================
   GAME VARIABLES
===================================== */

let score = 0;

let hitCount = 0;

let timeLeft = 30;

let targetName = '';

let uploadedImage = null;

let gameTimer = null;

let lastHitTime = 0;

let combo = 0;

let gameRunning = false;

let selectedAttack = 'punch';


/* =====================================
   ATTACK CONFIGURATION
===================================== */

const attacks = {

    punch: {
        score: 1,

        sound: punchSound,

        animation: 'hit-punch',

        effect: '👊',

        reactions: [
            'BUK!',
            'BAM!',
            'BOOM!',
            'WADUH!'
        ]
    },


    aslap: {
        score: 2,

        sound: aslapSound,

        animation: 'hit-aslap',

        effect: '✋',

        reactions: [
            'PLAK!',
            'PLUK!',
            'ADUH!',
            'WADAW!'
        ]
    },


    battle: {
        score: 3,

        sound: battleSound,

        animation: 'hit-battle',

        effect: '💥',

        reactions: [
            'DUARR!',
            'KABOOM!',
            'CRITICAL!',
            'SUPER HIT!'
        ]
    }

};


/* =====================================
   IMAGE UPLOAD
===================================== */

targetImageInput.addEventListener(
    'change',
    function(event) {

        const file =
            event.target.files[0];


        if (!file) {
            return;
        }


        if (!file.type.startsWith('image/')) {

            alert('File harus berupa gambar.');

            targetImageInput.value = '';

            return;
        }


        const reader =
            new FileReader();


        reader.onload =
            function(loadEvent) {

                uploadedImage =
                    loadEvent.target.result;


                previewImage.src =
                    uploadedImage;


                uploadPlaceholder.style.display =
                    'none';


                uploadPreview.style.display =
                    'block';

            };


        reader.readAsDataURL(file);

    }
);


/* =====================================
   SELECT ATTACK
===================================== */

attackButtons.forEach(button => {

    button.addEventListener(
        'click',
        function(event) {

            /*
             * Agar klik tombol serangan
             * tidak dianggap sebagai hit.
             */

            event.stopPropagation();


            attackButtons.forEach(item => {

                item.classList.remove('active');

            });


            this.classList.add('active');


            selectedAttack =
                this.dataset.attack;

        }
    );

});


/* =====================================
   START BUTTON
===================================== */

startButton.addEventListener(
    'click',
    startGame
);


/* =====================================
   ENTER KEY
===================================== */

targetNameInput.addEventListener(
    'keydown',
    function(event) {

        if (event.key === 'Enter') {

            startGame();

        }

    }
);


/* =====================================
   START GAME
===================================== */

function startGame() {

    targetName =
        targetNameInput.value.trim();


    if (!targetName) {

        targetNameInput.focus();


        targetNameInput.classList.add(
            'input-error'
        );


        setTimeout(() => {

            targetNameInput.classList.remove(
                'input-error'
            );

        }, 500);


        return;

    }


    score = 0;

    hitCount = 0;

    timeLeft = 30;

    combo = 0;

    lastHitTime = 0;

    gameRunning = true;

    selectedAttack = 'punch';


    /*
     * RESET ATTACK BUTTON
     */

    attackButtons.forEach(button => {

        button.classList.remove('active');

    });


    document
        .querySelector(
            '[data-attack="punch"]'
        )
        .classList.add('active');


    /*
     * RESET SCORE
     */

    scoreElement.textContent =
        score;


    timerElement.textContent =
        timeLeft;


    /*
     * TARGET
     */

    displayTargetName.textContent =
        targetName;


    characterName.textContent =
        targetName;


    /*
     * IMAGE
     */

    if (uploadedImage) {

        characterImage.src =
            uploadedImage;

    } else {

        characterImage.src =
            'assets/tono.png';

    }


    /*
     * RESET EFFECT
     */

    comboElement.classList.remove(
        'show'
    );


    showScreen(gameScreen);


    clearInterval(gameTimer);


    /*
     * START TIMER
     */

    gameTimer =
        setInterval(() => {

            timeLeft--;


            timerElement.textContent =
                timeLeft;


            if (timeLeft <= 0) {

                endGame();

            }

        }, 1000);

}


/* =====================================
   HIT CHARACTER
===================================== */

character.addEventListener(
    'pointerdown',
    function(event) {

        event.preventDefault();

        hitCharacter();

    }
);


/* =====================================
   HIT
===================================== */

function hitCharacter() {

    if (!gameRunning) {
        return;
    }


    const attack =
        attacks[selectedAttack];


    /*
     * HIT COUNT
     */

    hitCount++;


    /*
     * ADD SCORE
     */

    score +=
        attack.score;


    scoreElement.textContent =
        score;


    /*
     * EFFECT
     */

    updateCombo();

    playAttackAnimation(attack);

    showReaction(attack);

    showHitEffect(attack);

    playAttackSound(attack);

}


/* =====================================
   ATTACK ANIMATION
===================================== */

function playAttackAnimation(attack) {

    character.classList.remove(
        'hit-punch',
        'hit-aslap',
        'hit-battle'
    );


    /*
     * FORCE REFLOW
     */

    void character.offsetWidth;


    character.classList.add(
        attack.animation
    );

}


/* =====================================
   REACTION TEXT
===================================== */

function showReaction(attack) {

    const reactions =
        attack.reactions;


    const randomReaction =
        reactions[
            Math.floor(
                Math.random()
                *
                reactions.length
            )
        ];


    reactionText.textContent =
        randomReaction;


    reactionText.classList.remove(
        'show'
    );


    void reactionText.offsetWidth;


    reactionText.classList.add(
        'show'
    );

}


/* =====================================
   HIT EFFECT
===================================== */

function showHitEffect(attack) {

    hitEffect.textContent =
        attack.effect;


    hitEffect.classList.remove(
        'show'
    );


    void hitEffect.offsetWidth;


    hitEffect.classList.add(
        'show'
    );

}


/* =====================================
   PLAY SOUND
===================================== */

function playAttackSound(attack) {

    if (!attack.sound) {
        return;
    }


    /*
     * Clone audio supaya suara bisa
     * dimainkan berulang dengan cepat.
     */

    const sound =
        attack.sound.cloneNode();


    sound.volume =
        .8;


    sound.play().catch(() => {});

}


/* =====================================
   COMBO
===================================== */

function updateCombo() {

    const currentTime =
        Date.now();


    if (
        currentTime - lastHitTime
        <
        500
    ) {

        combo++;

    } else {

        combo = 1;

    }


    lastHitTime =
        currentTime;


    if (combo >= 5) {

        comboElement.textContent =
            `COMBO x${combo}!`;


        comboElement.classList.add(
            'show'
        );


    } else {

        comboElement.classList.remove(
            'show'
        );

    }

}


/* =====================================
   END GAME
===================================== */

function endGame() {

    gameRunning = false;


    clearInterval(gameTimer);


    timeLeft = 0;


    timerElement.textContent =
        0;


    resultTarget.textContent =
        targetName;


    finalScore.textContent =
        score;


    setResultMessage();


    showScreen(resultScreen);

}


/* =====================================
   RESULT MESSAGE
===================================== */

function setResultMessage() {

    let message;


    if (score < 30) {

        message =
            'Masih pemanasan! Tanganmu masih santai 😆';


    } else if (score < 75) {

        message =
            'Lumayan! Mulai ada semangat nih 🤣';


    } else if (score < 150) {

        message =
            'Waduh! Cepat juga tanganmu 😂';


    } else if (score < 250) {

        message =
            'GILA! Sudah level profesional! 🔥';


    } else {

        message =
            'LEGENDARY TAMPOLER! Mouse ikut ketakutan! 🏆';

    }


    resultMessage.textContent =
        message;

}


/* =====================================
   RESTART
===================================== */

restartButton.addEventListener(
    'click',
    function() {

        clearInterval(gameTimer);


        gameRunning = false;


        score = 0;

        hitCount = 0;

        timeLeft = 30;

        combo = 0;

        lastHitTime = 0;

        selectedAttack = 'punch';


        /*
         * RESET NAME
         */

        targetNameInput.value =
            '';


        /*
         * RESET IMAGE
         */

        uploadedImage =
            null;


        targetImageInput.value =
            '';


        previewImage.src =
            '';


        uploadPreview.style.display =
            'none';


        uploadPlaceholder.style.display =
            'flex';


        characterImage.src =
            'assets/tono.png';


        /*
         * RESET EFFECT
         */

        comboElement.classList.remove(
            'show'
        );


        character.classList.remove(
            'hit-punch',
            'hit-aslap',
            'hit-battle'
        );


        /*
         * SHOW START
         */

        showScreen(startScreen);


        setTimeout(() => {

            targetNameInput.focus();

        }, 100);

    }
);


/* =====================================
   SCREEN MANAGER
===================================== */

function showScreen(screen) {

    startScreen.classList.remove(
        'active'
    );


    gameScreen.classList.remove(
        'active'
    );


    resultScreen.classList.remove(
        'active'
    );


    screen.classList.add(
        'active'
    );

}