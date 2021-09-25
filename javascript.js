const navtoggle = document.querySelector(".toggle")
const navmenu = document.querySelector(".nav-menu")

navtoggle.addEventListener("click",() => {
navmenu.classList.toggle("nav-menu_visible");

if(navmenu.classList.contains("nav-menu_visible")){
    toggle.setAttribute("area-label", "Cerrar menú");
} else {
    toggle.setAttribute("arial-label","Abrir menú");
}
});

