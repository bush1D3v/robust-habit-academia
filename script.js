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

const form = document.querySelector('form')
const nameInput = document.getElementById('name')
const phoneInput = document.getElementById('phone')
const nameDiv = document.getElementById('nome')
const phoneDiv = document.getElementById('telefone')
const errorClass = 'error'

function nameValidation(){
    const nameValue = nameInput.value.trim()

    if(nameValue.length < 6){
        nameDiv.classList.add(errorClass)
        return false
    }else{
        nameDiv.classList.remove(errorClass)
        return true
    }
}

nameInput.addEventListener('input', () => {
    const inputValue = nameInput.value
    const cleanValue = inputValue.replace(/\d/g, '')
    const maxCleanValue = cleanValue.replace(/[^\w\sÀ-ÖØ-öø-ÿ]|!/gi, '')
    nameInput.value = maxCleanValue
    nameValidation()
})

function phoneValidation(){
    const phoneValue = phoneInput.value.trim()

    if(phoneValue.length < 10){
        phoneDiv.classList.add(errorClass)
        return false
    }else{
        phoneDiv.classList.remove(errorClass)
        return true
    }
}

phoneInput.addEventListener('input', () => {
    const inputValue = phoneInput.value
    const cleanValue = inputValue.replace(/[a-zA-Z]/g, '')
    const maxCleanValue = cleanValue.replace(/[^\w\s]/gi, '')
    phoneInput.value = maxCleanValue
    phoneValidation()
});

form.addEventListener("submit", (event) => {
    event.preventDefault()
    nameValidation()
    phoneValidation()
    if(nameValidation() && phoneValidation()){
        console.log({
            nome: nameInput.value.trim(),
            telefone: phoneInput.value.trim()
        })
        form.reset()
    }
  })