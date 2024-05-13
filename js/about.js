function darkmode() {
    const imgdark = document.getElementById('btn-dark');
    imgdark.classList.add('active');
    const imglight = document.getElementById('btn-light');
    imglight.classList.remove('active');
    const bodyElement = document.getElementById("body");
    bodyElement.className = "theme-dark";

}
function lightmode() {
    const imgdark = document.getElementById('btn-dark');
    imgdark.classList.remove('active');
    const imglight = document.getElementById('btn-light');
    imglight.classList.add('active');
    const bodyElement = document.getElementById("body");
    bodyElement.className = "theme-light";

}