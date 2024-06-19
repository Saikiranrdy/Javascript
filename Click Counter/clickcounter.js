let counterValueEl = document.getElementById("counterValue");


let clickCount = localStorage.getItem("clickCount");


if (clickCount === null || clickCount === undefined) {

  counterValueEl.textContent = 0;
} else {
 
  counterValueEl.textContent = parseInt(clickCount); 
}


function onIncrementCount() {
  
  let previousCounterValue = parseInt(counterValueEl.textContent);

 
  let updatedCounterValue = previousCounterValue + 1;

  
  localStorage.setItem("clickCount", updatedCounterValue);

 
  counterValueEl.textContent = updatedCounterValue;
}
