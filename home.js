
// ........................................................Option.........................



const optdiv = document.querySelector(".logo");
const car = document.querySelector(".opt");
const optClose = document.querySelector(".opti");


optdiv.addEventListener("click",() => car.classList.add("active"));
optClose.addEventListener("click",() => car.classList.remove("active"));








// .................................Add To cart...............................................






const cartIcon = document.querySelector(".ic");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");


cartIcon.addEventListener("click",() => cart.classList.add("active"));
cartClose.addEventListener("click",() => cart.classList.remove("active"));

