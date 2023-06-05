const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')
const navMenuItems = document.querySelectorAll('.nav-menu ul li')
const green = document.querySelector('.green')
const reveals = document.querySelectorAll('.reveal')


hamburger.addEventListener("click", ()=>{
    !navMenu.classList.contains("active") ? navMenu.classList.add('active') : navMenu.classList.remove('active')
    !hamburger.classList.contains("active") ? hamburger.classList.add('active') : hamburger.classList.remove('active')
})

// console.log(navMenuItems)

navMenuItems.forEach(item=>{
    item.onclick=()=>{
        navMenu.classList.contains("active") && navMenu.classList.remove('active')
        hamburger.classList.contains("active") && hamburger.classList.remove('active')
    }
})

function reveal(){
    reveals.forEach((reveal)=>{
       var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 150;
        elementTop < windowHeight - elementVisible ?
        reveal.classList.add('active'):
        reveal.classList.remove('active')
    })
}

window.addEventListener('scroll', reveal);

reveal();