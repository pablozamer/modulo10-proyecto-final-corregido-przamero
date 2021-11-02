let inicio = document.querySelector("#inicio");
let scrolling0 = document.querySelector("#fondouno");

inicio.addEventListener ("click", irUno, false);
function irUno (e) {
    scrolling0.scrollIntoView({
    behavior: "smooth"
    });
}



let sobreMi = document.querySelector("#sobreMi");

let scrolling = document.querySelector("#fondodos");

sobreMi.addEventListener("click", irDos, false);

function irDos(e) {
    scrolling.scrollIntoView({
        behavior: "smooth",
        inline: "center"
    });
}



let contacto = document.querySelector("#contacto");
let scrolling2 = document.querySelector("#footers");

contacto.addEventListener("click", irTres, false)

function irTres(e) {
    scrolling2.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center"
    })
}



function git() {
    window.open("https://github.com/search?q=user%3Apablozamer")
}
function correo() {
    window.open("https://outlook.live.com/owa/?username=pablozamer%40hotmail.com")
}
function insta() {
    window.open("https://www.instagram.com/pablo.zamero/")
}









// let sobreMi = document.querySelector("#sobreMi");
// let contacto = document.querySelector("#contacto");

// sobreMi.addEventListener("click", seccion1, false);
// contacto.addEventListener("click", seccion2, false);

// function seccion1(e) {
//     selection1.scrollIntoView({ behavior: "smooth" });
// }
// function seccion2(e) {
//     selection1.scrollIntoView({ behavior: "smooth"});
// }







// const links = document.querySelectorAll(".scroll-to");
// links.forEach((item)=>{
//     item.addEventListener("click", ()=>{
//         const el = document.getElementById(item.getAttribute("data-link"));
//         el.scrollIntoView({behavior:"smooth", block:"end"})
//     })
// })
// console.log(el);

