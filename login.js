const lamp = document.getElementById('lamp');
const loginWrapper = document.getElementById('loginWrapper');

lamp.addEventListener('click', () => {
    let currentOpacity = window.getComputedStyle(loginWrapper).getPropertyValue('opacity');
    if (currentOpacity == 1) {
        loginWrapper.style.opacity = 0.3;
    } else {
        loginWrapper.style.opacity = 1;
    }
});

const createBtn = document.getElementById('create');
createBtn.addEventListener('click', () => {
    window.location.href = "../SINE_UP_PAGES/sine.html";
});
