function toggleMenu(){
    const menu=document.querySelectorAll(".menu-links")
    const icon=document.querySelectorAll(".hamburger-icons")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}