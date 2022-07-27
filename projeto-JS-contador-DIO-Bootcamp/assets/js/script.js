let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

let botaoInc = document.getElementsByTagName('button')[1]
let botaoDec = document.getElementsByTagName('button')[0]


function increment(){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if(currentNumber >= 10){
    botaoInc.disabled = true;
  }
}

function decrement(){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if(currentNumber <= 0){
    currentNumberWrapper.classList.add('red')
  }
}

botaoInc.addEventListener('click', increment)
botaoDec.addEventListener('click', decrement)
