let x=document.querySelector("#signIn"),y=document.querySelector("#signUp"),z=document.querySelector("#btnLoginIn");function signUp(){x.style.left="-400px",y.style.left="50px",z.style.left="110px"}function signIn(){x.style.left="50px",y.style.left="-400px",z.style.left="0px"}document.getElementById("in").onclick=function(){signIn()},document.getElementById("up").onclick=function(){signUp()};let signIn1=document.querySelector("#sign-in"),close=(signIn1.addEventListener("click",e=>{document.querySelector(".login-bg").classList.add("is-open");signIn()}),document.querySelector("#close")),signUp1=(close.addEventListener("click",e=>{document.querySelector(".login-bg").classList.remove("is-open")}),document.querySelector("#sign-up"));function onProduct(){const e=document.getElementById("toProduct");e.scrollIntoView()}function onPricing(){const e=document.getElementById("toPricing");e.scrollIntoView()}signUp1.addEventListener("click",e=>{document.querySelector(".login-bg").classList.add("is-open");signUp()}),document.getElementById("product").onclick=function(){onProduct()},document.getElementById("pricing").onclick=function(){onPricing()};