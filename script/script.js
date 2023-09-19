const burger = document.querySelector('.burger')
const burgerClose = document.querySelector('.exit')
const content = document.querySelector('.content')

let scrollValue = 0

document.addEventListener('scroll' , ()=>{
    scrollValue = window.scrollY / 15
    document.body.style.cssText += `--paralax:${scrollValue}%;`
})




burger.addEventListener('click' , ()=>{
    content.classList.remove('off')
    burger.classList.add('off')
    setTimeout(() => {
        burgerClose.classList.remove('off')
    }, 400);
})
burgerClose.addEventListener('click' , ()=>{
    burgerClose.classList.add('off')
    content.classList.add('off')
    setTimeout(() => {
        burger.classList.remove('off')
    }, 400);
})