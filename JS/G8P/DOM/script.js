// console.log("I am running, script.js...")

// 1. Selecting an element

// getElementById
// console.log(document.getElementById("main-title"))

// getElementsByClassName
// let card_title = document.getElementsByClassName("card-title")
// console.log(card_title)

// getElementsByTagName

// querySelector
// console.log(document.querySelector(".card-description"))
// querySelectorAll
// 2. Getting the value of an element
// innerText
let description = document.querySelector(".card-description")
// console.log(description.innerText)

// 3. Setting the value of an element
description.innerText = "Hello everyone, Welcome to Shoolini University"
// 4. Event Listeners