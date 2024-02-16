document.querySelector('#lastModified').textContent = "Last Modification: "+document.lastModified;


const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelector("nav ul");

menubutton.addEventListener("click", () => {
	menubutton.classList.toggle("open");
menuitems.classList.toggle("open");
});