//selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display ="block"
    popupbox.style.display ="block"
})
//select cancel button
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(){
    Event.preventDefault()
    popupoverlay.style.display ="none"
    popupbox.style.display ="none"
})

//selecting sidenav bar
var popupoverlay01 = document.querySelector(".popup-overlay01")
var sidenavbar = document.querySelector(".side-navbar")
var sidenavbtn = document.getElementById("sidenavbtn")

sidenavbtn.addEventListener("click",function(){
    popupoverlay01.style.display ="block"
    sidenavbar.style.display ="block"
})

//selecting cancel sidebar
var xbtn = document.getElementById("xbtn")
xbtn.addEventListener("click",function(){
    Event.preventDefault()
    popupoverlay01.style.display ="none"
    sidenavbar.style.display ="none"
}) 

//select container, add-book, book-title, book-author, book-description 
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description")

//add & delete button function and element create
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2><br>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <br>
    <h6>FEB</h6>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display ="none"
    popupbox.style.display ="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}






