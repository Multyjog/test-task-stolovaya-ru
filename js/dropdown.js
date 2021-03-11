const element = document.querySelector(".header__mail__copy")

// show the copy menu
document.querySelector(".header__mail").addEventListener("click", e => {
    e.stopPropagation(); 
    element.classList.remove("header__mail__copy__hide");  
});

// remove the copy menu, by click anywhere
document.addEventListener("click", () => element.classList.add("header__mail__copy__hide"));

