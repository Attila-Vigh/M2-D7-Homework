// 11) Write a function to add a new link into the navbar
const addNewLinkToNav = () => {  
    const navLinkList = document.querySelector("nav")

    navLinkList.innerHTML += `<a class="p-2 text-muted" href="#">new Link</a>`
}
console.log(addNewLinkToNav());

