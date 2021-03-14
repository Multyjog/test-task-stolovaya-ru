const mailElement = document.querySelector(".header__mail__copy");
const callBackElement = document.querySelector(".header-tel-callback");
const categoryElement = document.querySelector(".drop-menu");
const shadow = document.querySelector(".shadow");
// const mobileMenu = document.querySelector(".drop-menu")
// let vWidth = window.innerWidth


// show the copy menu
document.querySelector(".header__mail").addEventListener("click", e => {
    e.stopPropagation(); 
    mailElement.classList.toggle("header__mail__copy__hide");  
});

// remove the copy menu, by click anywhere
document.addEventListener("click", () => mailElement.classList.add("header__mail__copy__hide"));

// show the callback menu, by hovering the phone number section
document.querySelector(".tel-phone").addEventListener("mouseover", () =>  {
    callBackElement.style.display = '';
    shadow.style.display = '';
    shadow.classList.add("shadow__block");
    callBackElement.classList.remove("hide");
});

// remove the callback menu, by mouseon shadow
shadow.addEventListener("mouseover", () => {
    shadow.classList.remove("shadow__block")
    callBackElement.classList.add("hide")
});

// add or remove the category menu at the mobile version of app by pressing a button
document.querySelector(".mobile-search__button").addEventListener("touchstart", () => categoryElement.classList.toggle("drop-menu__hide"))


// window.addEventListener("resize", () => {
//     if (vWidth > 767) {
//         mobileMenu.classList.add("drop-menu__hide")
//         console.log(vWidth)
//     }
//     return true
// })




