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
        div.textContent = Video ${videoCount};
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