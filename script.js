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

// 14) Write a function to remove all the links under "Elsewhere"
const removeAllElsewhereLinks = () => {
    const elsewhereLinks = document.querySelectorAll("ol")

    elsewhereLinks[2].remove()
}
console.log(removeAllElsewhereLinks());

// 15) Write a function to change the column size for heading in jumbotron
const changeColumnSizeHeadingJumbotron = () => {
    const getColumnSize = document.querySelector(".jumbotron .col-md-6")

    getColumnSize.classList.remove("col-md-6")
}
console.log(changeColumnSizeHeadingJumbotron());

// 16) Write a function to remove the "Search" magnifying glass icon
const removeSearchIcon = () => {
    const icon = document.querySelector("a>svg")

    icon.remove()
}
console.log(removeSearchIcon());

// 17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
const trimFirst50CharactersInFirstParagraph = () => {
    const Ps = document.querySelectorAll(".blog-post-meta + p")

    Ps.forEach( p => p.remove() )
}
console.log(trimFirst50CharactersInFirstParagraph());