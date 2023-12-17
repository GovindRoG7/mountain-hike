const navMenu = document.getElementById('nav_menu')
const navToggle = document.getElementById('nav_toggle')
const navClose = document.getElementById('nav_close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

const linkAction= () => {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))




const bgHeader = () =>{
    const header = document.getElementById('header')
    if(this.scrollY >= 50) {
        header.classList.add('bg-header');
    } else {
        header.classList.remove('bg-header');
    }
}
window.addEventListener('scroll', bgHeader)

gsap.from('.home_img-1',1.2, {opacity: 0, duration: 2, delay: .1, y: 200})
gsap.from('.home_img-2',1.2, {opacity: 0, duration: 2, delay: .3, y: 200})
gsap.from('.home_img-3',1.2, {opacity: 0, duration: 2, delay: .5, y: 200})
gsap.from('.home_img-4',1.2, {opacity: 0, duration: 2, delay: .7, y: 200})
gsap.from('.home_content',1.2, {opacity: 0, duration: 2, delay: .7, y: -60})
