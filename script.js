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

    if(nameValue.length < 5){
        nameDiv.classList.add(errorClass)
        return false
    }else{
        nameDiv.classList.remove(errorClass)
        return true
    }
}

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

form.addEventListener("submit", (event) => {
    event.preventDefault()
    nameValidation()
    phoneValidation()
    if(nameValidation() && phoneValidation()){
        console.log({
            nome: nameInput.value.trim(),
            telefone: phoneInput.value.trim()
        });
    }
  })

  nameInput.addEventListener('keydown', () => {
    nameValidation()
  })

  phoneInput.addEventListener('keydown', () => {
    phoneValidation()
  })