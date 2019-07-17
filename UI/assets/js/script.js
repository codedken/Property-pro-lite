const descBtn = document.getElementById("btn-prop-desc");
const descDisplay = document.getElementById("full-desc-display");
const mapBtn = document.getElementById("btn-map");
const mapDisplay = document.getElementById("map-display");
const toggleBtn = document.getElementById("toggle");
const toggledMenu = document.getElementById("menu-links");

toggleBtn.addEventListener('click', ()=>{
    if(toggledMenu.style.display === "none"){
        toggledMenu.style.display = "block";
    }else{
        toggledMenu.style.display = "none";
    }
})


descBtn.addEventListener('click', ()=>{
    mapDisplay.style.display = "none";
    descDisplay.style.display = "block";
})

mapBtn.addEventListener('click', ()=>{
    mapDisplay.style.display = "block";
    descDisplay.style.display = "none";
})