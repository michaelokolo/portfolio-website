const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')
const navMenuItems = document.querySelectorAll('.nav-menu ul li')
const green = document.querySelector('.green')
const reveals = document.querySelectorAll('.reveal')
const homeElement = document.querySelector('.home')
const text = 'I build things for the web.'
let container = document.querySelector('.home div h3')

hamburger.addEventListener("click", ()=>{
    !navMenu.classList.contains("active") ? navMenu.classList.add('active') : navMenu.classList.remove('active')
    !hamburger.classList.contains("active") ? hamburger.classList.add('active') : hamburger.classList.remove('active')
})



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

homeElement.animate(
    [
        {transform:"translateY(50px)"},
        {transform:'translateY(0px)'}
    ],
    {
        duration: 1000,
        iterations:1
    }
)

let i = 0;
function typewriter(){
    
    if (i < text.length){
        container.innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, 50)
    }
    if(container.innerHTML === text){
        setTimeout(Delete, 50)
    }
   
}
function Delete(){
        let gigg = text.substring(0, text.length - 1);
        console.log(gigg)
        text.length--
}

typewriter()
Delete()



