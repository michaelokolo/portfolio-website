const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')
console.log(hamburger)

hamburger.addEventListener("click", ()=>{
    !navMenu.classList.contains("active") ? navMenu.classList.add('active') : navMenu.classList.remove('active')
    !hamburger.classList.contains("active") ? hamburger.classList.add('active') : hamburger.classList.remove('active')
})