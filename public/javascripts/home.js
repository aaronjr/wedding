const yes = document.querySelector('#yes')
const no = document.querySelector('#no')
const form = document.querySelector('form')

yes.addEventListener('click', ()=>{
  form.className='visible'
})

no.addEventListener('click', ()=>{
  form.className='invisible'
})