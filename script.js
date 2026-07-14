let students = [];

const studentList = document.getElementById('studentList');
const searchInput = document.getElementById('searchStudent');
const classFilter = document.getElementById('classFilter');
const typeFilter = document.getElementById('typeFilter');
const projectCounter = document.getElementById('projectCounter');

const websiteModal = document.getElementById('websiteModal');
const modalStudentImage = document.getElementById('modalStudentImage');
const modalStudentName = document.getElementById('modalStudentName');
const modalStudentClass = document.getElementById('modalStudentClass');
const modalProjectType = document.getElementById('modalProjectType');

const gameStartScreen = document.getElementById('gameStartScreen');
const gameStartTitle = document.getElementById('gameStartTitle');
const startGameButton = document.getElementById('startGameButton');

const websiteFrame = document.getElementById('websiteFrame');
const frameWrapper = document.getElementById('frameWrapper');
const frameLoading = document.getElementById('frameLoading');

const fullscreenButton = document.getElementById('fullscreenButton');
const openWebsite = document.getElementById('openWebsite');

let currentProjectType = null;
let currentProjectUrl = null;


/* ========================================
   LOAD JSON
======================================== */

async function loadStudents() {
    try {
        const response = await fetch('data/students.json');

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        students = await response.json();

        // Urutkan ID dari terbesar ke terkecil (DESC)
        students.sort((a, b) => b.id - a.id);

        renderClassFilter(students);
        renderStudents(students);

    } catch (error) {
        console.error('Gagal memuat data siswa:', error);
        renderError();
    }
}


/* ========================================
   RENDER STUDENTS
======================================== */

function renderStudents(data) {
    studentList.innerHTML = '';

    updateProjectCounter(data.length);

    if (data.length === 0) {
        renderEmpty();
        return;
    }

    data.forEach((student, index) => {
        const number = String(index + 1).padStart(2, '0');
        const isGame = student.type === 'game';

        const typeText = isGame ? 'Game' : 'Website';
        const typeIcon = isGame ? 'bi-controller' : 'bi-globe2';
        const buttonText = isGame ? 'Mainkan Game' : 'Lihat Website';
        const buttonIcon = isGame ? 'bi-play-fill' : 'bi-eye';

        const projectName =
            student.project ||
            (isGame ? 'Game Project' : 'Website Project');

        const card = `
            <div class="col-xl-4 col-md-6">

                <article
                    class="student-card"
                    data-bs-toggle="modal"
                    data-bs-target="#websiteModal"
                    data-name="${escapeHTML(student.name)}"
                    data-class="${escapeHTML(student.class)}"
                    data-image="${escapeHTML(student.image)}"
                    data-url="${escapeHTML(student.url)}"
                    data-type="${escapeHTML(student.type)}"
                    data-project="${escapeHTML(projectName)}"
                >

                    <div class="student-card-image">

                        <img
                            src="${escapeHTML(student.image)}"
                            alt="Karya ${escapeHTML(student.name)}"
                            loading="lazy"
                        >

                        <div class="student-number">
                            ${number}
                        </div>

                        <div class="project-type-badge ${student.type}">
                            <i class="bi ${typeIcon}"></i>
                            ${typeText}
                        </div>

                        <div class="student-card-overlay">

                            <div class="preview-button">
                                <i class="bi ${buttonIcon}"></i>
                                ${buttonText}
                            </div>

                        </div>

                    </div>

                    <div class="student-card-body">

                        <h3 class="student-name">
                            ${escapeHTML(student.name)}
                        </h3>

                        <div class="student-class">
                            <i class="bi bi-mortarboard"></i>
                            Kelas ${escapeHTML(student.class)}
                        </div>

                        <div class="student-card-footer">

                            <span class="project-label">
                                ${escapeHTML(projectName)}
                            </span>

                            <div class="arrow-button">
                                <i class="bi bi-arrow-right"></i>
                            </div>

                        </div>

                    </div>

                </article>

            </div>
        `;

        studentList.insertAdjacentHTML('beforeend', card);
    });
}


/* ========================================
   CLASS FILTER
======================================== */

function renderClassFilter(data) {
    classFilter.innerHTML = `
        <option value="">
            Semua Kelas
        </option>
    `;

    const classes = [
        ...new Set(
            data.map(student => student.class)
        )
    ];

    classes.sort();

    classes.forEach(className => {
        const option = document.createElement('option');

        option.value = className;
        option.textContent = `Kelas ${className}`;

        classFilter.appendChild(option);
    });
}


/* ========================================
   FILTER
======================================== */

function filterStudents() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const classValue = classFilter.value;
    const typeValue = typeFilter.value;

    const filteredStudents = students.filter(student => {
        const studentName = student.name.toLowerCase();
        const projectName = (student.project || '').toLowerCase();

        const matchSearch =
            studentName.includes(searchValue) ||
            projectName.includes(searchValue);

        const matchClass =
            classValue === '' ||
            student.class === classValue;

        const matchType =
            typeValue === '' ||
            student.type === typeValue;

        return matchSearch && matchClass && matchType;
    });

    renderStudents(filteredStudents);
}


/* ========================================
   PROJECT COUNTER
======================================== */

function updateProjectCounter(total) {
    projectCounter.textContent = `${total} Karya`;
}


/* ========================================
   EMPTY STATE
======================================== */

function renderEmpty() {
    studentList.innerHTML = `
        <div class="col-12">

            <div class="empty-state">

                <div class="empty-state-icon">
                    <i class="bi bi-search"></i>
                </div>

                <h4>
                    Karya tidak ditemukan
                </h4>

                <p>
                    Coba gunakan nama siswa, judul karya,
                    kelas, atau kategori lainnya.
                </p>

            </div>

        </div>
    `;
}


/* ========================================
   ERROR STATE
======================================== */

function renderError() {
    updateProjectCounter(0);

    studentList.innerHTML = `
        <div class="col-12">

            <div class="error-state">

                <div class="error-state-icon">
                    <i class="bi bi-exclamation-triangle"></i>
                </div>

                <h4>
                    Data gagal dimuat
                </h4>

                <p>
                    Pastikan file data/students.json tersedia
                    dan website dijalankan melalui web server.
                </p>

            </div>

        </div>
    `;
}


/* ========================================
   OPEN MODAL
======================================== */

websiteModal.addEventListener('show.bs.modal', function (event) {
    const card = event.relatedTarget;

    if (!card) {
        return;
    }

    const name = card.getAttribute('data-name');
    const studentClass = card.getAttribute('data-class');
    const image = card.getAttribute('data-image');
    const url = card.getAttribute('data-url');
    const type = card.getAttribute('data-type');
    const project = card.getAttribute('data-project');

    const isGame = type === 'game';

    currentProjectType = type;
    currentProjectUrl = url;

    modalStudentImage.src = image;
    modalStudentImage.alt = `Foto ${name}`;

    modalStudentName.textContent = name;
    modalStudentClass.textContent = `Kelas ${studentClass}`;

    modalProjectType.textContent = isGame ? 'Game' : 'Website';
    modalProjectType.className = `modal-project-type ${type}`;

    openWebsite.title =
        isGame
            ? 'Buka Game di Tab Baru'
            : 'Buka Website di Tab Baru';

    openWebsite.onclick = function () {
        window.open(
            currentProjectUrl,
            '_blank',
            'noopener,noreferrer'
        );
    };

    /*
     * PENTING:
     * Kosongkan iframe setiap modal dibuka.
     * Game tidak boleh berjalan sebelum
     * tombol Mulai Bermain diklik.
     */

    websiteFrame.src = 'about:blank';

    frameLoading.style.display = 'none';

    if (isGame) {
        showGameStartScreen(project);
    } else {
        showWebsiteFrame();
    }
});


/* ========================================
   SHOW GAME START SCREEN
======================================== */

function showGameStartScreen(project) {
    gameStartTitle.textContent =
        project || 'Game Project';

    gameStartScreen.style.display = 'flex';

    frameWrapper.style.display = 'none';
}


/* ========================================
   SHOW WEBSITE
======================================== */

function showWebsiteFrame() {
    gameStartScreen.style.display = 'none';

    frameWrapper.style.display = 'block';

    frameLoading.style.display = 'flex';

    websiteFrame.src = currentProjectUrl;
}


/* ========================================
   START GAME
======================================== */

startGameButton.addEventListener('click', function () {
    if (
        currentProjectType !== 'game' ||
        !currentProjectUrl
    ) {
        return;
    }

    /*
     * Hilangkan halaman petunjuk.
     */

    gameStartScreen.style.display = 'none';

    /*
     * Tampilkan iframe.
     */

    frameWrapper.style.display = 'block';

    /*
     * Tampilkan loading.
     */

    frameLoading.style.display = 'flex';

    /*
     * BARU SEKARANG URL GAME DIMUAT.
     *
     * Jadi game tidak berjalan
     * saat modal pertama dibuka.
     */

    websiteFrame.src = currentProjectUrl;
});


/* ========================================
   IFRAME LOADED
======================================== */

websiteFrame.addEventListener('load', function () {
    /*
     * Jangan proses about:blank.
     */

    if (
        !websiteFrame.src ||
        websiteFrame.src === 'about:blank'
    ) {
        return;
    }

    frameLoading.style.display = 'none';

    /*
     * Fokuskan iframe jika game.
     */

    if (currentProjectType === 'game') {
        setTimeout(() => {
            focusGameFrame();
        }, 300);
    }
});


/* ========================================
   FOCUS GAME
======================================== */

function focusGameFrame() {
    try {
        websiteFrame.focus();
    } catch (error) {
        console.error(
            'Gagal fokus ke game:',
            error
        );
    }
}


/* ========================================
   CLICK FRAME
======================================== */

frameWrapper.addEventListener('click', function () {
    if (currentProjectType === 'game') {
        focusGameFrame();
    }
});


/* ========================================
   MOUSE ENTER GAME
======================================== */

websiteFrame.addEventListener('mouseenter', function () {
    if (currentProjectType === 'game') {
        focusGameFrame();
    }
});


/* ========================================
   FULLSCREEN
======================================== */

fullscreenButton.addEventListener('click', async function () {
    /*
     * Jika game belum dimulai,
     * jangan fullscreen.
     */

    if (
        currentProjectType === 'game' &&
        gameStartScreen.style.display !== 'none'
    ) {
        return;
    }

    try {
        if (!document.fullscreenElement) {
            await frameWrapper.requestFullscreen();

            fullscreenButton.innerHTML = `
                <i class="bi bi-fullscreen-exit"></i>
            `;

            fullscreenButton.title = 'Keluar Fullscreen';

            if (currentProjectType === 'game') {
                setTimeout(() => {
                    focusGameFrame();
                }, 300);
            }

        } else {
            await document.exitFullscreen();
        }

    } catch (error) {
        console.error(
            'Fullscreen gagal:',
            error
        );
    }
});


/* ========================================
   FULLSCREEN CHANGE
======================================== */

document.addEventListener('fullscreenchange', function () {
    if (!document.fullscreenElement) {
        fullscreenButton.innerHTML = `
            <i class="bi bi-arrows-fullscreen"></i>
        `;

        fullscreenButton.title = 'Fullscreen';
    }

    if (
        document.fullscreenElement &&
        currentProjectType === 'game'
    ) {
        setTimeout(() => {
            focusGameFrame();
        }, 300);
    }
});


/* ========================================
   CLOSE MODAL
======================================== */

websiteModal.addEventListener('hidden.bs.modal', function () {
    /*
     * Hentikan game.
     */

    websiteFrame.src = 'about:blank';

    /*
     * Reset tampilan.
     */

    gameStartScreen.style.display = 'none';

    frameWrapper.style.display = 'none';

    frameLoading.style.display = 'none';

    /*
     * Reset project.
     */

    currentProjectType = null;

    currentProjectUrl = null;

    /*
     * Reset fullscreen.
     */

    if (document.fullscreenElement) {
        document
            .exitFullscreen()
            .catch(() => {});
    }
});


/* ========================================
   SEARCH EVENT
======================================== */

searchInput.addEventListener(
    'input',
    filterStudents
);


/* ========================================
   CLASS FILTER EVENT
======================================== */

classFilter.addEventListener(
    'change',
    filterStudents
);


/* ========================================
   TYPE FILTER EVENT
======================================== */

typeFilter.addEventListener(
    'change',
    filterStudents
);


/* ========================================
   ESCAPE HTML
======================================== */

function escapeHTML(value) {
    if (
        value === null ||
        value === undefined
    ) {
        return '';
    }

    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}


/* ========================================
   START
======================================== */

loadStudents();