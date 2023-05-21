const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')
const green = document.querySelector('.green')


hamburger.addEventListener("click", ()=>{
    !navMenu.classList.contains("active") ? navMenu.classList.add('active') : navMenu.classList.remove('active')
    !hamburger.classList.contains("active") ? hamburger.classList.add('active') : hamburger.classList.remove('active')
})

green.classList.add('overlay')
green.addEventListener('mouseover', ()=>{
    green.classList.remove('overlay')
})
green.addEventListener('mouseout', ()=>{
    green.classList.add('overlay')
})