"use strict"
// 11) Write a function to add a new link into the navbar
const addNewLinkToNav = () => {  
    const navLinkList = document.querySelector("nav")

    navLinkList.innerHTML += `<a class="p-2 text-muted" href="#">new Link</a>`
}
console.log(addNewLinkToNav());

// 12) Write a function to change the color of the main title
const chageTitleColor = () => {
    const title = document.querySelector("h1")

    title.style.color = "purple"
}
console.log(chageTitleColor());

// 13) Write a function to change the background of the jumbotron
const changeJumbotronBg = () => {
    const jumbotron = document.querySelector(".jumbotron")
    console.log(jumbotron);

    jumbotron.classList.remove("bg-dark")
    jumbotron.style.backgroundColor = "#9abeda"
}
console.log(changeJumbotronBg());
