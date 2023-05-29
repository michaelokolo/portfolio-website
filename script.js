const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')
const navMenuItems = document.querySelectorAll('.nav-menu ul li')
const green = document.querySelector('.green')


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
