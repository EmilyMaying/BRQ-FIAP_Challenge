function configModal() {
 $('#configModal').modal('toggle')
 const elem = document.getElementById('estouDirigindo');


elem.value = "Estou dirigindo";

let timer = 10;
function attTimer(timer){
  console.log(timer)
  elem.value = timer + " Estou dirigindo";
  timer == 0 ? $('#configModal').modal('toggle') : false;
  return timer = timer - 1
};

let timerId = setInterval(() => timer = attTimer(timer), 1000);


setTimeout(() => { clearInterval(timerId);  }, 11000);

}

function turnOnLamp() {
 document.getElementById("lamp").style.color = document.getElementById("lamp").style.color == "yellow" ? "black" : "yellow";
}

function houseModal() {
 $('#houseModal').modal('toggle')
}