var a;

document.querySelector("#new-game").addEventListener("click", function() {
    NewGame();
});

document.querySelector("#eraser").addEventListener("click", function() {
    eraser();
});

document.querySelector("#clear").addEventListener("click", function() {
    clear();
    randomNum();
});

document.querySelector("#random").addEventListener("click", function() {
    random();
});


// To generate random number 
function random() {
    let pad = document.querySelectorAll(".box");
    for (var i = 0; i < pad.length; i++) {
        pad[i].addEventListener("mouseenter", function() {
            this.style.background = randomRGBColor();
        });
    }
}

function randomRGBColor() {
    return ("rgb(" + randomNum() + "," + randomNum() + "," + randomNum() + ")");
}

function randomNum() {
    let x = Math.round(Math.random() * 255);
    return x;
}
//To start new game
function NewGame() {
    a = prompt("How many squares do you want in the next game?", "32");
    appendPad(createPad(a));
}

// To attach a clear pad
function clear() {
    appendPad(createPad(a));
}

// To erase the trail
function eraser() {
    let pad = document.querySelectorAll(".box");
    for (var i = 0; i < pad.length; i++) {
        pad[i].addEventListener("mouseenter", function() {
            this.style.background = "white";
        });
    }
}

function appendPad(pad) {
    const padcontainer = document.querySelector(".container");
    padcontainer.removeChild(document.querySelector(".sketchpad"));
    padcontainer.appendChild(pad);
}

function createPad(num) {
    const sketchPad = document.createElement("div");
    sketchPad.className = "sketchpad";
    for (var x = 0; x <= num * num; x++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.opacity = 1;
        box.addEventListener("mouseenter", function() {
            this.style.background = "black";
        });
        sketchPad.appendChild(box)
        document.documentElement.style.setProperty("--squares-per-side", num);
    }
    return sketchPad;
}