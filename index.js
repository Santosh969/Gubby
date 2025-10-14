const wrapper = document.querySelector('.categories-wrapper');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const scrollAmount = 150;

leftBtn.addEventListener('click', () => {
    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

wrapper.addEventListener('scroll', () => {
    leftBtn.style.opacity = wrapper.scrollLeft > 5 ? 1 : 0;
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    rightBtn.style.opacity = wrapper.scrollLeft >= maxScroll - 5 ? 0.5 : 1;
});

const page2 = document.getElementById('page2');
let videoCount = 4;

function loadMoreVideos() {
    for (let i = 1; i <= 4; i++) {
        videoCount++;
        const div = document.createElement('div');
        div.className = 'video-item';
        div.textContent = `Video ${videoCount}`;
        page2.appendChild(div);
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreVideos();
    }
});

const importanceWrapper = document.querySelector('.importance-wrapper');
const importanceBtn = document.querySelector('.importance-btn');
const importancePopup = document.querySelector('.importance-popup');
let popupLocked = false;

importanceBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    popupLocked = !popupLocked;
    importancePopup.style.display = popupLocked ? 'block' : 'none';
});

importanceWrapper.addEventListener('mouseenter', () => {
    if (!popupLocked) importancePopup.style.display = 'block';
});
importanceWrapper.addEventListener('mouseleave', () => {
    if (!popupLocked) importancePopup.style.display = 'none';
});

importancePopup.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.addEventListener('click', (e) => {
    if (!importanceWrapper.contains(e.target)) {
        popupLocked = false;
        importancePopup.style.display = 'none';
    }
});

const loginWrapper = document.querySelector('.login-wrapper');
const Loginpopup = document.querySelector('.Login-popup');
let PopupLocked = false;

loginWrapper.addEventListener('mouseenter', () => {
    if (!PopupLocked) Loginpopup.style.display = 'block';
});
loginWrapper.addEventListener('mouseleave', () => {
    if (!PopupLocked) Loginpopup.style.display = 'none';
});

Loginpopup.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.addEventListener('click', (e) => {
    if (!loginWrapper.contains(e.target)) {
        PopupLocked = false;
        Loginpopup.style.display = 'none';
    }
});

const createwrapper = document.querySelector('.create-wrapper');
const createPop = document.querySelector('.create-pop');
let PopLocked = false;

createwrapper.addEventListener('mouseenter', () => {
    if (!PopLocked) createPop.style.display = 'block';
});
createwrapper.addEventListener('mouseleave', () => {
    if (!PopLocked) createPop.style.display = 'none';
});

createPop.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.addEventListener('click', (e) => {
    if (!createwrapper.contains(e.target)) {
        PopLocked = false;
        createPop.style.display = 'none';
    }
});