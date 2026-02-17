
// ........................................................Option.........................



const optdiv = document.querySelector(".logo");
const car = document.querySelector(".opt");
const optClose = document.querySelector(".opti");


optdiv.addEventListener("click",() => car.classList.add("active"));
optClose.addEventListener("click",() => car.classList.remove("active"));
