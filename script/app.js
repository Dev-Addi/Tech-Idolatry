// TOGGLE-MENU BUTTON
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

//FREQUENTLY ASKED Q's BUTTON
let menus = document.querySelectorAll(".content");

for(let menu of menus){
    menu.addEventListener("click", (e) => {
        let target = e.target;
        target.classList.toggle("active")
    })
}


// POP-UP MODAL
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");


const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);


const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);

// COPYRIGHT FOOTER
const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear();