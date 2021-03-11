const mailElement = document.querySelector(".header__mail__copy")
const callBackElement = document.querySelector(".header-tel-callback")

// show the copy menu
document.querySelector(".header__mail").addEventListener("click", e => {
    e.stopPropagation(); 
    element.classList.toggle("header__mail__copy__hide");  
});

// remove the copy menu, by click anywhere
document.addEventListener("click", () => mailElement.classList.add("header__mail__copy__hide"));

// show the callback menu, by hovering the phone number section
document.querySelector(".tel-phone").addEventListener("mouseover", () => callBackElement.classList.remove("hide") )

// remove the callback menu, by click anywhere
document.addEventListener("click", () => callBackElement.classList.add("hide"));



