function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const hoverDiv = document.getElementById('image4');
    const hoverText = document.querySelector(".text-inside")

    hoverDiv.addEventListener('mouseover', () => {
        hoverText.style.color = "black";
        hoverDiv.classList.add('hovered');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const sechoverDiv = document.getElementById('image5');
    const sechoverText = document.querySelector(".the-text-inside")

    sechoverDiv.addEventListener('mouseover', () => {
        sechoverText.style.color = "black";
        sechoverDiv.classList.add('hovered');
    });
});

function popup(popupClass) {
    var popup = document.querySelector("." + popupClass);
    popup.style.display = "flex";
}

function closepopup(popupClass) {
    var popup = document.querySelector("." + popupClass);
    popup.style.display = "none";
}