IMask(document.querySelector('#cc-num'), {
  mask: "0000 0000 0000 0000"
})

IMask(document.querySelector('#cc-cvv'), {
  mask: '000'
})

IMask(document.querySelector('#cc-validity'), {
  mask: 'MM{/}AA',
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    AA: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear()+10).slice(2)
    }
  }
})


let cardFront = document.querySelector('#card-front')
let cardBack = document.querySelector('#card-back')
let turnFrontInputs = document.querySelectorAll('.turn-front')


let cvv = document.querySelector('#cc-cvv')
cvv.addEventListener('focus', ()=>{
  cardFront.style.animation = 'card-front-in .5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'  
  cardBack.style.animation = 'card-back-in .5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'  
})  

turnFrontInputs.forEach(element => {
  element.addEventListener('focus', ()=>{
    cardFront.style.animation = 'card-front-out .5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'  
    cardBack.style.animation = 'card-back-out .5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'  
  })
});


let numInput = document.querySelector('#cc-num')
let numBlock = document.querySelector('#card-number-container')

let nameInput = document.querySelector('#cc-name')
let nameBlock = document.querySelector('#card-name')

let validityInput = document.querySelector('#cc-validity')
let validityBlock =  document.querySelector('#card-validity')

let cvvInput = document.querySelector('#cc-cvv')
let cvvBlock = document.querySelector('#card-cvv')
let flags = document.querySelectorAll('.flag')

function changeFlag(){
  // if(numInput.value.length > 1)return
  if (numInput.value[0] == '4'){
    flags[0].classList.add('selected')
    flags[1].classList.remove('selected')
  }else if (numInput.value[0] == '5'){
    flags[0].classList.remove('selected')
    flags[1].classList.add('selected')
  }else{
    flags[0].classList.remove('selected')
    flags[1].classList.remove('selected')
  }
}

numInput.oninput = ()=>{
  numBlock.innerHTML = numInput.value
  changeFlag()
}

nameInput.oninput = ()=>{
  nameBlock.innerHTML = nameInput.value
}

validityInput.oninput = ()=>{
  validityBlock.innerHTML = validityInput.value
}

cvvInput.oninput = ()=>{
  cvvBlock.innerHTML = cvvInput.value
}



let form = document.querySelector('form')
let buttonText = document.querySelector('#button-text')
let load = document.querySelector('#load')

form.onsubmit = (e)=>{
  e.preventDefault()
  buttonText.style.display = 'none'
  load.style.display = 'block'
  setTimeout(function() {
      window.location.href = "./thanks.html";
  }, 2000);
}





