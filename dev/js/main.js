const home = document.getElementById('home')
const about = document.getElementById('about')
const skill = document.getElementById('skill')
const proyect = document.getElementById('proyect')
const contact = document.getElementById('contact')
const container = document.getElementById('container_desktop')



home.addEventListener('click', () => {

  console.log('home')
})

about.addEventListener('click', () => {
  container.innerHTML="p hola"
})

skill.addEventListener('click', () => {
  console.log('skill')
})

proyect.addEventListener('click', () => {
  console.log('proyect')
})

contact.addEventListener('click', () => {
  console.log('contact')
})
