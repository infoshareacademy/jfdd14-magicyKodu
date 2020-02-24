const cookieBanner = document.querySelector(".cookie-banner");
const cookieBtn = document.querySelector(".cookieBtn");

cookieBtn.addEventListener("click", closeButton);

function closeButton() {
    cookieBanner.style.display = "none";
    localStorage.setItem("cookie", "true");
}

function checkCookies() {
    if (localStorage.getItem("cookie") === 'true') {
        closeButton();
    }
}

checkCookies();