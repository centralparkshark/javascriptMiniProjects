const quotes = [
"its going to be okay but its going to be different",
"isnt it nice to be gentle with yourself",
"no need to hurry. no need to sparkle. no need to be anybody but oneself.",
"give yourself a chance to succeed",
"it wont feel like this forever",
"as long as we're still alive there is hope.",
]

function randomQuote() {
    //should give a random index for quotes
    let ranNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quote").textContent = quotes[ranNum];
}


// get element by Id
// const myElement = document.querySelector(".my-class");

// query selection  (returns first element matching)
// const myElement = document.querySelector(".my-class");

// query selection all (returns all in NodeList)
// const myElements = document.querySelectorAll(".my-class");

// by tag or class name
// const myElements = document.getElementsByTagName("p");
// const myElements = document.getElementsByClassName("my-class");

// var image = document.getElementById("my-image");
// image.setAttribute("src", "dog.jpg");
// image.setAttribute("alt", "A cute dog");

let mode = "light";
function darkMode() {
    if (mode == "light") {
        mode = "dark"
        document.getElementById("mode").textContent = "Light Mode";
        let paragraphs = document.querySelectorAll("p");
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = "white";
          }
        document.getElementById("body").style.backgroundColor = "navy";
    } else {
        mode = "light"
        document.getElementById("mode").textContent = "Dark Mode";
        let paragraphs = document.querySelectorAll("p");
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = "navy";
          }
        document.getElementById("body").style.backgroundColor = "white";
    }
}

function changeTextColor(event) {
    const targetButton = event.target;
    if (event.shiftKey) {
        targetButton.style.color = "blue";
    } else {
        targetButton.style.color = "red";
    }
}

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
button1.addEventListener("click", changeTextColor);
button2.addEventListener("click", changeTextColor);
button3.addEventListener("click", changeTextColor);

function changeText(event) {
    const targetButton = event.target;
    targetButton.textContent = targetButton.textContent.toUpperCase()
}

function changeTextBack(event) {
    const targetButton = event.target;
    let text = targetButton.textContent.toLowerCase();
    let capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    targetButton.textContent = capitalized;
}

button1.addEventListener("mouseover", changeText)
button1.addEventListener("mouseout", changeTextBack)

button2.addEventListener("mouseover", changeText)
button2.addEventListener("mouseout", changeTextBack)

button3.addEventListener("mouseover", changeText)
button3.addEventListener("mouseout", changeTextBack)


function changeParagraph() {
    inputText.textContent = input.value
}

const input = document.getElementById("input")
// key down means any key is pressed down
input.addEventListener("keydown", changeParagraph)
const inputText = document.getElementById("inputText")

function newParagraph() {
    if (firstClick) {
        const newPara = document.createElement("p");
        newPara.id = "newPara"
        newPara.innerText = "New Paragraph!!!";
        if (mode== "dark") {
            newPara.style.color = "white";
        } 
        document.body.appendChild(newPara);
        firstClick = false;
    } else {
        firstClick = true;
        const newPara = document.getElementById("newPara")
        newPara.remove();
    }
}

let firstClick = true
const addRemove = document.getElementById("addRemove");
addRemove.addEventListener("click", newParagraph)

const list = document.querySelectorAll("li")
list.forEach(listItem => {
    listItem.addEventListener("click", (event) => {
        event.target.style.color = "red"
    })
})

const form = document.querySelectorAll("input")
form.forEach(input => {
    input.addEventListener("input", (event) => {
        if (input.id == 'email') {
            (input.value.match(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/)) ? markTrue(input) : markFalse(input)
        } else if (input.id == 'name') {
            (input.value != "") ? markTrue(input) : markFalse(input)
        } else if (input.id == 'phone') {
            (input.value.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/)) ? markTrue(input) : markFalse(input)
        } else if (input.id == 'password') {
            (input.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/)) ? markTrue(input) : markFalse(input)
        }

    })
})

function markTrue(input) {
    input.style.color = "black"
    return true
} 

function markFalse(input) {
    input.style.color = "red"
    return false
}