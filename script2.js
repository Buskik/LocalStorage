
window.addEventListener("DOMContentLoaded", (event) => {
cor = localStorage.getItem('cor')
azul = document.querySelector('.azul')
if (cor === 'azul') {
    azul.style.backgroundColor = 'blue'
}
})