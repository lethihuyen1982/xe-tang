function moveUp() {
    let top = document.getElementById("tank").style["top"]
    top = parseInt(top)
    if (top > 0) {
        top = top - 19
        document.getElementById("tank").style["top"] = top + "px"
        document.getElementById("tank").style["transform"] = "rotate(360deg)"
        }

}

function moveDown() {
    let top = document.getElementById("tank").style["top"]
    top = parseInt(top)
    if (top < 171) {
        top = top + 19
        document.getElementById("tank").style["top"] = top + "px"
        document.getElementById("tank").style["transform"] = "rotate(180deg)"
    }

}

function moveLeft() {
    let left = document.getElementById("tank").style["left"]
    left = parseInt(left)
    if(left>0) {
        left = left - 19
        document.getElementById("tank").style["left"] = left + "px"
        document.getElementById("tank").style["transform"] = "rotate(270deg)"
    }
    
}

function moveRight() {
    let left = document.getElementById("tank").style["left"]
    left = parseInt(left)
    if(left<171) {
        left = left + 19
        document.getElementById("tank").style["left"] = left + "px"
        document.getElementById("tank").style["transform"] = "rotate(90deg)"
    }
    
}