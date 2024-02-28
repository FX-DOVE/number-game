const input = document.getElementById("input");
const count = document.getElementById("count-down");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const check = document.getElementById("check");
const reset = document.getElementById("reset");
const displayedresult = document.getElementById("displayed-result");
const minNum = 1;
const maxNum = 9;
let result;

let guess;
let win = 1;
let loss = 1;
let time = 20;
let running = true;

check.onclick = function(){
  if(time <=  0) {
    displayedresult.innerHTML=("game over");
    return;
  }

  let result = Math.floor(Math.random()* maxNum) + minNum;
  displayedresult.innerHTML = result;
  guess = Number(input.value);

  if(isNaN(guess)){
    alert("please enter number from 1  - 9")
    displayedresult.innerHTML = null;
  } else if(guess > maxNum || guess < minNum){
    alert("please enter number from 1  - 9")
    displayedresult.innerHTML = null;
  } else if(guess == result){
    alert("correct !!! you won")
    correct.innerHTML = win;
    win++;
    count.innerHTML = time;
    time--;
  } else {
    wrong.innerHTML = loss;
    loss++;
    count.innerHTML = time;
    time--;
  }

  input.value = '';
}

reset.onclick = function(){
  alert("u reset all ur score")
  count.innerHTML = 0;  
  wrong.innerHTML = 0;
  time.innerHTML = 0;
  correct.innerHTML = 0;
  displayedresult.innerHTML = 0;
}
