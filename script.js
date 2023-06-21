const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')
const navMenuItems = document.querySelectorAll('.nav-menu ul li')
const green = document.querySelector('.green')
const reveals = document.querySelectorAll('.reveal')
const homeElement = document.querySelector('.home')
let container = document.querySelector('.home div h3 .text')


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

const carouselText = [
    {text: "  'm a software engineer.", color:'#64ffda'},
    {text: " 'm a front-end developer.", color:'orange'},
    {text: " 'm a back-end developer.", color:'yellow'}
]

async function text(list, eleRef){
    var i = 0;
    while(true){
        updateFontColor(eleRef, list[i].color)
        await typeSentence(list[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= list.length){i = 0}
    }
}

function updateFontColor(eleRef , color){
    eleRef.style.color = color;
}
text(carouselText, container)
async function typeSentence(sentence, eleRef, delay = 100){
    const letters = sentence.split('');
    
    for(let i = 0; i < letters.length; i++){
        await waitForMs(delay)
        eleRef.append(letters[i])
    }
    return;
}


function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}



async function deleteSentence(eleRef){
    const sentence = eleRef.innerHTML;
    const letters = sentence.split('');
    for(let i = letters.length; i > 0 ; i--){
        await waitForMs(100);
        letters.pop();
        eleRef.innerHTML = letters.join('');
    }
}

