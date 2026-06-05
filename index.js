let timerInterval;
let timerInterval2;
let seconds;
let second;
let minute;
let minutes;
let timeRunning1 = false;
let timeRunning2= false;
let carryMin;
let carrySec;
let backgroundTap = false;

let inputMin = document.querySelector("#timeM");
let inputSec = document.querySelector("#timeS");
let actionButton = document.getElementById("submitBtn");
let actionButton2 = document.getElementById("body");



actionButton.addEventListener('click', function(e) {

    
    if (inputSec.value < 59 && inputSec.value > 0){

    e.preventDefault();
    seconds= Number(inputSec.value);
    second= Number(inputSec.value);
    minutes= inputMin.value;
    minute= inputMin.value;

    }


    else{

      e.preventDefault();

      carryMin = Math.floor(Number(inputSec.value) / 60);
      carrySec = inputSec.value % 60;
      seconds = carrySec;
      second = carrySec;

      minutes= (Number(inputMin.value))+carryMin;
      minute= (Number(inputMin.value))+carryMin;

      

    }
    

    //changing initial value on the clock
  if(inputMin.value== ""){
    document.querySelector("#minutes").textContent= "00";
    document.querySelector("#minute").textContent= "00";
}
else{
   document.querySelector("#minutes").textContent= minutes.toString().padStart(2, "0");
   document.querySelector("#minute").textContent= minute.toString().padStart(2, "0");
}
  if(inputSec.value == ""){
    document.querySelector("#seconds").textContent= "00";
    document.querySelector("#second").textContent= "00";
  }
  else{
   document.querySelector("#seconds").textContent= seconds.toString().padStart(2, "0");
   document.querySelector("#second").textContent= second.toString().padStart(2, "0");
  }
    //hiding input field
    document.querySelector("#myDiv").style.display = "block";
    document.querySelector("#input").style.display = "none";
    document.getElementById("body").style.backgroundColor = "grey";
    backgroundTap = true;
});

if(backgroundTap == true){
actionButton2.addEventListener('click', function() {

  if(timeRunning1 == true && timeRunning2 == false)
  {
    start2();
  }
   if(timeRunning1 == false && timeRunning2 == true)
  {
    start();
  } 
    
});
}


  
function start(){

    if(!timeRunning1){
      
        timeRunning1 = true;
        timeRunning2 = false;
        time2();
        clearInterval(timerInterval);
    
    }
}
  
function time() {

  if(timeRunning2){
    document.querySelector("#idiv").style.backgroundColor= "hsl(96, 44%, 61%)";
     document.querySelector("#idiv").style.color="white";
     document.querySelector("#idiv2").style.backgroundColor= "hsl(0, 0%, 90%)";
      document.querySelector("#idiv2").style.color="black";
  }

  let minElement = document.querySelector("#minutes");
  let secElement = document.querySelector("#seconds");

 
  timerInterval = setInterval(() => { 
    
    if (minutes == 0 && seconds == 0) {
     clearInterval(timerInterval);
     alert("PLAYER 2 WON");
     timeRunning1 = false;
     return; 
    }
    else{

    if (seconds === 0) {
      seconds = 59;
      minutes--; 
    } else {
      seconds--;
    }

    minElement.innerText = minutes.toString().padStart(2, "0");
    secElement.innerText = seconds.toString().padStart(2, "0");
  }

  }, 1000);
}
    
function start2(){

    if(!timeRunning2){
      
        timeRunning2 = true;
        timeRunning1 = false;
        time();
        clearInterval(timerInterval2);
    
    }
}
  
function time2() {

   if(timeRunning1){
    document.querySelector("#idiv2").style.backgroundColor="hsl(96, 44%, 61%)";
    document.querySelector("#idiv2").style.color="white";
    document.querySelector("#idiv").style.backgroundColor="hsl(0, 0%, 90%)";
    document.querySelector("#idiv").style.color="black";
  }
  let minElement = document.querySelector("#minute");
  let secElement = document.querySelector("#second");

 
   timerInterval2 = setInterval(() => {
    
    
    if (minute == 0 && second == 0) {
      clearInterval(timerInterval2); 
      alert("PLAYER 1 WON");
      timeRunning2 = false;
      return; 
    }

    else{

    if (second === 0) {
      second = 59;
      minute--; 
    } else {
      second--;
    }

    
    minElement.innerText = minute.toString().padStart(2, "0");
    secElement.innerText = second.toString().padStart(2, "0");
  }
  }, 1000);
}

