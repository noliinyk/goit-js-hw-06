let counterValue = 0
const counter = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');

decrementBtn.addEventListener("click", () => {
    counterValue-=1;
     
  console.log(counterValue);
  counter.innerHTML = counterValue;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener("click", () => {
    counterValue+=1;
   
  console.log(counterValue);
  counter.innerHTML = counterValue;
});

