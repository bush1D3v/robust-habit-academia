const target = document.querySelectorAll('[data-animation]')
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass)
        } else{
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll()
    })
}