const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const displayBlock = function (blockChar, rowDiv){
    console.log(blockChar)
    let blockDiv = document.createElement('div')
    blockDiv.classList.add("block")
    if (blockChar === "W"){
        blockDiv.classList.add("wall")
    } else if (blockChar === " "){
        blockDiv.classList.add("floor")
    } else if (blockChar === "S"){
        blockDiv.classList.add("start")
    } else if (blockChar === "F"){
        blockDiv.classList.add("finish")
    }
    rowDiv.appendChild(blockDiv)
}

const displayRow = function (rowStr, index){
    const maze = document.querySelector("#maze")
    let rowDiv = document.createElement('div')
    rowDiv.classList.add("row")
    maze.appendChild(rowDiv)

    for (let colNum = 0; colNum < rowStr.length; colNum++){
        displayBlock(rowStr.charAt(colNum), rowDiv)
    }
}
map.forEach(displayRow)

document.addEventListener('keydown', logKey);

let boxTop = 311;
let boxLeft = 8;

let playerRow = 9;
let playerCol = 0;

function logKey(event) {
    if (event.keyCode === 83 || event.keyCode === 40) {
        if (map[playerRow+1][playerCol]!== "W"){
            document.getElementById("box").style.top = (boxTop += 29) + "px";
            playerRow += 1;
        }
    } else if (event.keyCode === 87 || event.keyCode === 38) {
        if (map[playerRow-1][playerCol]!== "W"){
            document.getElementById("box").style.top = (boxTop -= 29) + "px";
            playerRow -= 1;
        }
    } else if (event.keyCode === 65 || event.keyCode === 37) {
        if (map[playerRow][playerCol-1]!== "W" && map[playerRow][playerCol]!== "S"){
            document.getElementById("box").style.left = (boxLeft -= 25) + "px";
            playerCol -= 1;
        }
    } else if (event.keyCode === 68 || event.keyCode === 39) {
        if (map[playerRow][playerCol+1]!== "W" && map[playerRow][playerCol]!== "F"){
            document.getElementById("box").style.left = (boxLeft += 25) + "px";
            playerCol += 1;
        }
    }
    winCon()
}

function winCon() {
    if (map[playerRow][playerCol]=== "F"){
        winDiv = document.createElement("h1");
        document.body.appendChild(winDiv);
        winDiv.textContent = "You reached the End. You Win!";
        return winDiv;
    }
}