let btnOpen = document.querySelector('.burger-open');
let btnClose = document.querySelector('.burger-close');
let close = document.querySelector(".fa-xmark");
let open = document.querySelector(".fa-bars");
let nav = document.querySelector(".ul")
let navBurger=document.querySelector(".burger-ul")

btnOpen.addEventListener("click", function () {
    nav.style.display = "none";
    navBurger.style.display = "block";
    btnClose.style.display = "block"
    btnOpen.style.display = "none";
    open.style.color = "#ff8938"
});
btnClose.addEventListener("click", function () {
    navBurger.style.display = "none";
    nav.style.display = "none";
    btnClose.style.display = "none"
    btnOpen.style.display = "block";
    close.style.color = "#ff8938"

})
