let x = document.querySelector("#signIn");
let y = document.querySelector("#signUp");
let z = document.querySelector("#btnLoginIn");

function signUp() {
    x.style.left = "-400px"
    y.style.left = "50px"
    z.style.left = "110px"
};
function signIn() {
    x.style.left = "50px"
    y.style.left = "-400px"
    z.style.left = "0px"
};
document.getElementById("in").onclick = function(){signIn()};
document.getElementById("up").onclick = function(){signUp()};

let signIn1 = document.querySelector("#sign-in");
signIn1.addEventListener("click", event =>{
    let lgBg = document.querySelector(".login-bg").classList.add("is-open");
    signIn();
});
let close = document.querySelector("#close"); 
close.addEventListener("click", event =>{
    let lgBg = document.querySelector(".login-bg").classList.remove("is-open")
});
let signUp1 = document.querySelector("#sign-up");
signUp1.addEventListener("click", event =>{
    let lgBg = document.querySelector(".login-bg").classList.add("is-open");
    signUp();
});

function onProduct() {
    const element = document.getElementById("toProduct");
    element.scrollIntoView();
}
function onPricing() {
    const element = document.getElementById("toPricing");
    element.scrollIntoView();
}
document.getElementById("product").onclick = function(){onProduct()};
document.getElementById("pricing").onclick = function(){onPricing()};
