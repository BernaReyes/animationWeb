const modal = document.querySelector('.modal')
const spiderman = document.querySelector('#spiderman')
const robin = document.querySelector('#robin')
const batman = document.querySelector('#batman')
const closeButton = document.querySelector('.modal__close')

spiderman.addEventListener('click', ()=> {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
robin.addEventListener('click', ()=> {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
batman.addEventListener('click', ()=> {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})

closeButton.addEventListener('click', ()=> {
    modal.classList.add('hidden')
    modal.classList.remove('visible')
})
