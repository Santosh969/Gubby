const brightnessSlider = document.getElementById('brightnessSlider');
const signupWrapper = document.getElementById('signupWrapper');

brightnessSlider.addEventListener('input', () => {
    const brightness = brightnessSlider.value;
    signupWrapper.style.filter = `brightness(${brightness}%)`;
    signupWrapper.style.opacity = brightness / 100;
});

const signupBtn = document.getElementById('signupBtn');
signupBtn.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const humanCheck = document.getElementById('humanCheck').checked;

    if (!firstName || !lastName || !email || !password || !gender || !humanCheck) {
        alert("Please fill all required fields and verify you're human!");
    } else {
        alert("Signup Successful!");
    }
});

const googleBtn = document.getElementById('googleBtn');
googleBtn.addEventListener('click', () => {
    alert("Optional Google Signup Clicked!");
});

const loginLink = document.getElementById('loginLink');
loginLink.addEventListener('click', () => {
    window.location.href = "../login_pages/login.html";
});
const home = document.getElementById('home');
home.addEventListener('click', () => {
    window.location.href = "../mainpage/index.html";
});

const clearForm = document.getElementById("clearForm");
clearForm.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("firstName").value = "";
    document.getElementById("middleName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => radio.checked = false);
    document.getElementById("humanCheck").checked = false;
});
