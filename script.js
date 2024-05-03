

window.addEventListener("DOMContentLoaded", (event) => {
    localStorage.clear()
    rosa = document.querySelector('.rosa')
data = "rosa"
rosa.addEventListener("click", () => {
    data = "azul"
    localStorage.setItem('cor', data)
    window.location.href = 'azul.html'
})
});