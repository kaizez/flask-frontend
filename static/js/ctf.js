// function showSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'flex'
// }

// function hideSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'none'
// }
// function checkValue(event) {
//     event.preventDefault()
//     var inputValue = document.getElementById('Submit').value;
//     var hashvalue = CryptoJS.MD5(inputValue).toString();
//     const matchValue = '6fdf526bf0d3fe1205d8019eece8e831';

//     if (hashvalue === matchValue) {
//         // var results = document.getElementById('results');
//         // results.innerHTML = 'The value matches!';
//         var popup = document.querySelector(".popup-container");
//         popup.style.display= "flex"
//     } else {
//         var results = document.getElementById('results');
//         results.innerHTML = 'Incorrect Flag!';
//     }
    
//     document.getElementById('Submit').value = '';
// }


// function hint(){
//     const hintdisc = document.querySelector(".hint-description")
//     hintdisc.style.display = "flex"
// }

// function closepopup(){
//     var popup = document.querySelector(".popup-container");
//     popup.style.display= "none"
// }

// function bug(){
//     results.innerHTML = "CTF{7H15_15_345Y_r16H7_Vh6BWlXNKLD9HpiBkUWk}"
// }


function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function checkValue(event) {
    event.preventDefault();
    var inputValue = document.getElementById('Submit').value;
    var hashvalue = CryptoJS.MD5(inputValue).toString();
    const matchValue = '6fdf526bf0d3fe1205d8019eece8e831';

    if (hashvalue === matchValue) {
        var popup = document.querySelector(".popup-container");
        popup.style.display = "flex";
         const hintdisc = document.querySelector(".hint-description");
        hintdisc.style.display = "none";
         var results = document.querySelector('.results');
        results.textContent = "";
    } else {
        var results = document.querySelector('.results');
        results.textContent = 'Incorrect Flag!';
    }
    
    document.getElementById('Submit').value = '';
}

function hint() {
    const hintdisc = document.querySelector(".hint-description");
    hintdisc.style.display = "flex";
}

function closepopup() {
    var popup = document.querySelector(".popup-container");
    popup.style.display = "none";
}

function bug() {
    var results = document.querySelector('.results');
    results.textContent = "CTF{7H15_15_345Y_r16H7_Vh6BWlXNKLD9HpiBkUWk}";
}

document.getElementById('openPopupBtn').addEventListener('click', openPopup);
document.getElementById('openPopupBtn').addEventListener('touchstart', openPopup);

document.getElementById('closePopupBtn').addEventListener('click', closepopup);
document.getElementById('closePopupBtn').addEventListener('touchstart', closepopup);

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popupContainer')) {
        closepopup();
    }
});
window.addEventListener('touchstart', function(event) {
    if (event.target === document.getElementById('popupContainer')) {
        closepopup();
    }
});


function popup(popupClass) {
    var popup = document.querySelector("." + popupClass);
    popup.style.display = "flex";
}

function closepopup(popupClass) {
    var popup = document.querySelector("." + popupClass);
    popup.style.display = "none";
}

function checkValue1(event) {
    event.preventDefault();
    var inputValue = document.getElementById('Submit').value;
    var hashvalue = CryptoJS.MD5(inputValue).toString();
    const matchValue = '6fdf526bf0d3fe1205d8019eece8e831';

    if (hashvalue === matchValue) {
        var results = document.querySelector('.results');
        results.textContent = 'Answer Is Correct!';
        const hintdisc = document.querySelector(".hint-description");
        hintdisc.style.display = "none";
    } else {
        var results = document.querySelector('.results');
        results.textContent = 'Incorrect Flag!';
    }
    
    document.getElementById('Submit').value = '';
}