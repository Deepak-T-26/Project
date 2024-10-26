// Selecting elements to change display from none to block
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Selecting cancel button
var CancelBook = document.getElementById("CancelBook");
CancelBook.addEventListener("click", function() {
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Selecting Bookname container and form elements
var bookContainer = document.getElementById("book-container");
var addBookForm = document.getElementById("add-book-form");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addBookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "Bookname-side");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
                     <h5>${bookauthorinput.value}</h5>
                     <p>${bookdescriptioninput.value}</p>
                     <button onclick="deletebook(event)">Delete This Book</button>`;
    bookContainer.appendChild(div);
    
    // Clear inputs after adding
    booktitleinput.value = '';
    bookauthorinput.value = '';
    bookdescriptioninput.value = '';
    
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

function deletebook(event) {
    event.target.parentElement.remove();
}
