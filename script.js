const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});

const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
faders.forEach(fader => {
const top = fader.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
fader.classList.add('show');
}
});
});
